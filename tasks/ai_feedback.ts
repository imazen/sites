// npm run translate
import { Configuration, OpenAIApi} from 'openai';
import openai from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { SITE, FOLDER_TO_ENGLISH_NAMES, LANGUAGE_FOLDER_CODES, CONTENT_COLLECTIONS} from '../src/consts';
import { completeChatCached } from './openai_cache';
import { ParsedMd, loadAndParseMdFiles, tryLoadFileString} from './markdown'
//var LineBreaker = require('linebreak');
import LineBreaker from 'linebreak';

const GPT_MODEL = 'gpt-3.5-turbo';

interface FeedbackTask {
	referenceFile: ParsedMd;
	prompts: string[];
	taskInputHash: string;
    commentaryPath: string;
    generateAlternate: boolean;
    alternateVersionPath: string;
}


const  prompt1: string = ` If there is nothing to suggest, just output {{NO_SUGGESTIONS}}, but otherwise please list any bugs, mistakes, and spelling errors in the following technical doc, as well as anything that might be confusing.`;
const  prompt2: string = "Provide 'before' and 'after' segments to tighten up the content and correct any errors.";


async function createTask(
	refFile: ParsedMd, generateAlternate: boolean = false
): Promise<FeedbackTask> {
    const dir = path.dirname(refFile.filePath);
    const basename = path.basename(refFile.filePath, '.md');
	const commentaryPath = `${dir}/_f_${basename}.feedback.txt`;
    const newPath = `${dir}/_f_${basename}.alternate.md`;
    
    const prompts = [prompt1, prompt2];

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
	apiKey: process.env.VITE_OPENAI_API_KEY,
});
const openapi = new OpenAIApi(configuration);

function wrapText(text: string, lineLength: number) {
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
    return lines.join("\n");
}


async function feedbackTask(task: FeedbackTask) {

    let listFeedbackPrompt = task.prompts[0];
    let altVersionPrompt = task.prompts[1];
    let conversation : openai.ChatCompletionRequestMessage[] = [
        {
            role: 'system',
            content: listFeedbackPrompt,
        },
        {
            role: 'user',
            content: task.referenceFile.content,
        },
    ];
    console.log("Getting feedback on " + task.referenceFile.filePath)


	const completion = await completeChatCached({
		model: GPT_MODEL,
		messages: conversation,
	}, openapi);

	const feedbackRaw = completion.choices[0].message?.content || "";

    // wrap lines to 120 characters in feedbackRaw
    const feedbackWrapped = wrapText(feedbackRaw, 120);


    // if feedbackRaw contains {{NOTHING}} delete the file
    if (feedbackRaw.includes('{{NO_SUGGESTIONS}}')) {
        // if it exists
        if (fs.existsSync(task.commentaryPath)) {
            console.log("Deleting " + task.commentaryPath);
            await fs.promises.rm(task.commentaryPath);
        }
    }else{
        // write to task.commentaryPath
        await fs.promises.writeFile(task.commentaryPath, "[[" + task.taskInputHash + "]]\n\n" +  feedbackWrapped, 'utf-8');
    }
	console.log(feedbackWrapped);

    if (task.generateAlternate === false) {
        console.log("Skipping alternate version generation");
        return;
    }

    console.log("Getting revision on " + task.referenceFile.filePath);

    conversation.push({
        role: completion.choices[0].message?.role,
        content: feedbackRaw,
    });
    conversation.push({
        role: 'user',
        content: altVersionPrompt,
    });
    const completion2 = await completeChatCached({
        model: GPT_MODEL,
        messages: conversation,
    }, openapi);


    const altVersionRaw = completion2.choices[0].message?.content;

    // if altVersionRaw is defined an not an empty string
    if (altVersionRaw) {

        await fs.promises.writeFile(task.alternateVersionPath, altVersionRaw, 'utf-8');
        console.log("Wrote alternate version" + task.alternateVersionPath);
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

// await feedbackOne();

const langNamesInEnglish = FOLDER_TO_ENGLISH_NAMES;
const langFolderCodes = LANGUAGE_FOLDER_CODES;

await feedbackAll(CONTENT_COLLECTIONS, ['en']);