// npm run translate
import { Configuration, OpenAIApi} from 'openai';
import openai from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { SITE, FOLDER_TO_ENGLISH_NAMES, LANGUAGE_FOLDER_CODES, CONTENT_COLLECTIONS, OPENAI_FEEDBACK_MODEL} from '../src/consts';
import { completeChatCached } from './openai_cache';
import { ParsedMd, loadAndParseMdFiles, tryLoadFileString, updateFrontmatterDates} from './markdown'
//var LineBreaker = require('linebreak');
import LineBreaker from 'linebreak';

const GPT_MODEL = OPENAI_FEEDBACK_MODEL;

interface FeedbackTask {
	referenceFile: ParsedMd;
	prompts: string[];
	taskInputHash: string;
    commentaryPath: string;
    generateAlternate: boolean;
    alternateVersionPath: string;
}

// {{FILE}}, {{BODY}}, {{DATA.title}}, {{DATA.description}} {{responses=1..}} {{temperature=0..2}} {{hide=true|false}}
const defaultPrompts = [
    `{{hide=true}}Don't break character. You are a technical editor with a keen eye, who likes to improve confusing phrasing and insert supportive visual aids. You are also a stickler for grammar and spelling.`,
    `Please list any bugs, mistakes, and spelling errors in the following markdown article: {{FILE}}`,
    `Should we clarify any concepts?`,
    `Should we add any images? Please suggest image URLs unless unless those URLs are already present.`,
    `{{responses=2}}Can you suggest a better description for this article than "{{DATA.description}}"?`,
    `{{responses=2}}Can you suggest a better - but very concise and short -title for this article than "{{DATA.title}}"?`,
		`{{responses=2}}Can you suggest 10 top keywords (comma delimited) and 5 top short search queries related to this content?`,
		`Are there keywords or phrases we should introduce to help more people find this page?"?`,
    `{{temperature=1.5}}Don't break character. You're an editor who likes to spruce up content and add punch, quips, puns, and personality to technical content while staying safe-for-work. Can you identify some sentences from the article and suggest more engaging replacements?`
];

async function createTask(
	refFile: ParsedMd, generateAlternate: boolean = false
): Promise<FeedbackTask> {
    const dir = path.dirname(refFile.filePath);
    const basename = path.basename(refFile.filePath, '.md');
	const commentaryPath = `${dir}/_f_${basename}.feedback.txt`;
    const newPath = `${dir}/_f_${basename}.alternate.md`;

 
    const prompts = (refFile.data.feedback_prompts ?? defaultPrompts).concat([refFile.data.add_feedback_prompt])
        .filter(s => s && s.trim() !== '');

	const taskInputHash = crypto
		.createHash('sha256')
		.update(prompts.join('||'))
		.update(refFile.fileHash)
		.digest('hex')
		.slice(0, 16);

	return {
		referenceFile: refFile,
        prompts: prompts,
        taskInputHash: taskInputHash,
        commentaryPath: commentaryPath,
        generateAlternate: generateAlternate,
        alternateVersionPath: newPath
	};
}

// create a function to check if the target file for the given TranslationTask exists and has front-matter with taskInputHash matching
async function isTaskUpToDate(task: FeedbackTask): Promise<boolean> {
	const targetFileExists = fs.existsSync(task.commentaryPath);
	if (!targetFileExists) {
		return false;
	}
	// load the first line of the target file
    const targetFileText = await tryLoadFileString(task.commentaryPath, '');
    if (targetFileText === '') return false;
    // extract the [[taskInputHash]] from the first line of the target file
    const taskInputHash = targetFileText.match(/\[\[([^\]]+)\]\]/)?.[1];
	if (taskInputHash !== task.taskInputHash) {
		return false;
	}
	return true;
}

async function createNeededTasks(dir: string): Promise<FeedbackTask[]>{
	const parsedRefFiles = await loadAndParseMdFiles(dir);

	// Create TranslationTasks for each parsedRefFiles, filter to the ones that are not up to date
	const allPossibleTasks = await Promise.all(
		parsedRefFiles.map((refFile) => createTask(refFile))
	);

	const nullableTasks = await Promise.all(
		allPossibleTasks.map(async (task) => {
			const isUpToDate = await isTaskUpToDate(task);
			if (!isUpToDate) {
				return task;
			}
            return null;
		}));
    // filter out nulls from nullableTasks into a new array
    return nullableTasks.filter((task) => task !== null) as FeedbackTask[];
}

const configuration = new Configuration({
	apiKey: process.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY
});
const openapi = new OpenAIApi(configuration);

function wrapText(text: string, lineLength: number, maxSequentialNewlines: number = 2) {
    const breaker = new LineBreaker(text);
    let last = 0;
    let bk = null;
    let lines: string[] = [""];

    while (bk = breaker.nextBreak()) {
        // get the string between the last break and this one
        var word = text.slice(last, bk.position);
        let last_line = lines[lines.length - 1];
        if (last_line && last_line.length + word.length < lineLength) {
            lines[lines.length - 1] = last_line + word;
        } else {
            lines.push(word);
        }

        if (bk.required) {
            lines.push("");
        }
        last = bk.position;
    }
    let result = lines.join("\n");
    let newLinesString = "\n".repeat(maxSequentialNewlines + 1);
    while (result.includes(newLinesString)) {
        result = result.replace(newLinesString, newLinesString.slice(0, -1));
    }
    return result;
}

function injectVars(promptString: string, task: FeedbackTask, removeNamedVars: string[] = []) {
    let result = removeVars(promptString, removeNamedVars);
    result = result.replace('{{FILE}}', task.referenceFile.fileString);
    result = result.replace('{{BODY}}', task.referenceFile.content);
    for (let key in task.referenceFile.data) {
        result = result.replace(`{{DATA.${key}}}`, task.referenceFile.data[key]);
    }
    return result.replace('(hide)', '');
}

interface PromptSettings{
    temperature?: number;
    hide?: boolean;
    top_p?: number;
    responses?: number;
    promptWithoutVars: string;
}

function removeVars(promptString: string, vars: string[]) {
    let result = promptString;
    for (let key of vars) {
        result = result.replace(`{{${key}}}`, '');
    }
    return result;
}

function extractSettings(promptString: string): PromptSettings{
    // extract a hash of all {{key=value}} pairs, then remove them from the prompt string
    let settings: PromptSettings = { promptWithoutVars: promptString};
    let result = promptString.replace(/{{(\w+)=(\w+)}}/g, (match, key, value) => {
        // convert value to the proper type - parse numbers, and booleans
        if (value === 'true') {
            value = true;
        } else if (value === 'false') {
            value = false;
        } else if (!isNaN(Number(value))) {
            value = Number(value);
        }
        settings[key] = value;
        return '';
    });
    settings.promptWithoutVars = result;
    return settings;
}

function dividerString(title: string) {
    return `\n================ ${title} ==================\n`;
}

async function feedbackTask(task: FeedbackTask) {
    let conversation : openai.ChatCompletionRequestMessage[] = [];
    let originalFeedbackFile = await tryLoadFileString(task.commentaryPath, '');

    let feedbackFile = `For version [[${task.taskInputHash}]] of prompts and [[${task.referenceFile.filePath}]]\n`;
    console.log(feedbackFile);

    for (let i = 0; i < task.prompts.length; i++) {
        let role = i == 0 ? openai.ChatCompletionRequestMessageRoleEnum.System : openai.ChatCompletionRequestMessageRoleEnum.User;

        let promptSettings = extractSettings(task.prompts[i]);
 
        conversation.push({
            role: role,
            content: injectVars(promptSettings.promptWithoutVars, task),
        });
        
        // Don't duplicate the file contents into the log or feedback file
        let messageWithoutFile = injectVars(task.prompts[i], task, ['FILE', 'BODY']);

        let promptLog = dividerString(`PROMPT (${role})`) + wrapText(messageWithoutFile, 120, 2) +"\n";
        if (promptSettings.hide) promptLog = "(prompt hidden)\n";
        
        console.log(promptLog.slice(0,-1));
        feedbackFile += promptLog;
        
        const completion = await completeChatCached({
            model: GPT_MODEL,
            messages: conversation,
            temperature: promptSettings.temperature,
            n: promptSettings.responses || 1,
            top_p: promptSettings.top_p,
        }, openapi);

				for (let choice of completion.choices) {
					let feedbackRaw = choice.message?.content || "";
					conversation.push({
						role: choice.message?.role,
						content: feedbackRaw,
					});
					let choiceNumberString = completion.choices.length > 1 ? ` #${choice.index + 1} of ${completion.choices.length}` : '';
					let responseLog = dividerString(`RESPONSE ${choiceNumberString}(${choice.message?.role})`) + wrapText(feedbackRaw, 120, 2) + "\n";
					if (promptSettings.hide) responseLog = "(response hidden)\n";
					console.log(responseLog.slice(0,-1));
					feedbackFile += responseLog;
				}
				
    
        // write to task.commentaryPath
        await fs.promises.writeFile(task.commentaryPath, feedbackFile + dividerString("PRIOR FEEDBACK") + originalFeedbackFile, 'utf-8');
    }   
}


async function feedbackAll(contentCollections: string[], langFolderCodes: string[]) {
    
    // create a list of all the tasks that need to be done and flatten them (not slow)
    const allTasks = await Promise.all(
		contentCollections.map(async (contentCollection) => {
			return await Promise.all(langFolderCodes.map(async (langFolderCode) => {
				return await createNeededTasks(`./src/content/${contentCollection}/${langFolderCode}`);
			}));
		})
    ).then((tasks) => tasks.flat(2));

    // translate all the tasks
    await Promise.all(
        allTasks.map(async (task) => {
            await feedbackTask(task);
        }
    ));
}

async function feedbackOne() {
    const tasks = await createNeededTasks('./src/content/docs/en'); // get first result from createNeededTasks('es')
    if (tasks[0] != null) {
        await feedbackTask(tasks[0]);
    }
}

//await feedbackOne();

const langFolderCodes = LANGUAGE_FOLDER_CODES;

await updateFrontmatterDates(CONTENT_COLLECTIONS);

await feedbackAll(CONTENT_COLLECTIONS, ['en']);
