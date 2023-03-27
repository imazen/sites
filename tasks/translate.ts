// npm run translate
import { Configuration, OpenAIApi, openai } from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import matter from 'gray-matter';
import { exit } from 'process';
import { SITE, FOLDER_TO_ENGLISH_NAMES, LANGUAGE_FOLDER_CODES} from '../src/consts';


const langNamesInEnglish = FOLDER_TO_ENGLISH_NAMES;
const langFolderCodes = LANGUAGE_FOLDER_CODES;

// create a function that normalizes line endings and ending whitespace on a string
function normalize(str: string) {
	return str.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\s+$/, '');
}

interface ParsedMd {
	filePath: string;
	fileHash: string;
	langCode: string;
	content: string;
	data: Record<string, unknown>;
}

function getFolderCodeFromPath(filePath: string, defaultValue: string): string {
	const segments = filePath.split('/');
	//return the first segment that matches a langFolderCodes entry
	const folderCode = segments.find((s) => langFolderCodes.includes(s));
	return folderCode || defaultValue;
}

async function parseMdFile(filePath: string): Promise<ParsedMd> {
	const content = await fs.promises.readFile(filePath, 'utf-8');
	const normalizedContent = normalize(content);
	const fileHash = crypto.createHash('sha256').update(normalizedContent).digest('hex').slice(0, 16);
	const { content: parsedContent, data } = matter(content);
	const langCode = getFolderCodeFromPath(filePath, SITE.defaultLanguage);
	return {
		filePath,
		langCode,
		fileHash,
		content: parsedContent,
		data,
	};
}

async function processDirectory(directory: string): Promise<ParsedMd[]> {
	const entries = await fs.promises.readdir(directory, { withFileTypes: true });
	const parsedFiles: ParsedMd[] = [];

	for (const entry of entries) {
		const fullPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			const subDirectoryFiles = await processDirectory(fullPath);
			parsedFiles.push(...subDirectoryFiles);
		} else if (entry.isFile() && path.extname(entry.name) === '.md') {
			const parsedFile = await parseMdFile(fullPath);
			parsedFiles.push(parsedFile);
		}
	}
	return parsedFiles;
}

async function loadAndParseMdFiles(directory: string): Promise<ParsedMd[]> {
	return processDirectory(directory);
}

interface TranslationTask {
	referenceFile: ParsedMd;
	referenceLang: string;
	targetLanguageNameInEnglish: string;
	targetLangCode: string;
	targetFilePath: string;
	languagePrompt: string;
	fileSpecificPrompt: string;
	combinedPrompt: string;
	taskInputHash: string;
    targetRoundtripFilePath: string;
}

function translatePath(filePath: string, sourceLangCode: string, targetLangCode: string): string {
	const targetFilePath = filePath.replace(`/${sourceLangCode}/`, `/${targetLangCode}/`);
	return targetFilePath;
}

function createPrompt(
    targetLangCode: string,
	referenceFile: ParsedMd,
	languagePrompt: string,
	fileSpecificPrompt: string,
): string {
    //if languagePrompt is empty, generate a default prompt
    if (languagePrompt === '') {
        languagePrompt = `Translate the following to ${langNamesInEnglish[targetLangCode]}, preserving all markdown formatting.
        Don't translate html elements or URLs, but do change '${referenceFile.langCode}' to '${targetLangCode}' inside link addresses.
        Inside code blocks, only translate comments`;
    }
    // Maybe someday have @inherit rules or something
	return languagePrompt + fileSpecificPrompt;
}

async function createTranslationTaskFromReferenceFile(
	targetLangCode: string,
	refFile: ParsedMd
): Promise<TranslationTask> {
	const newPath = translatePath(refFile.filePath, refFile.langCode, targetLangCode);
	const newFolder = path.dirname(`./${newPath}`);
	const sharedPromptPath = `${newFolder}/__shared.prompt.txt`;
	const fileSpecificPromptPath = `${newFolder}/_${path.basename(
		refFile.filePath,
		'.md'
	)}.prompt.txt`;

    const targetRoundtripFilePath = `${newFolder}/_roundtrip_${path.basename(
		refFile.filePath,
		'.md'
	)}.txt`;
	// if the target language folder doesn't exist, warn and skip
	if (!fs.existsSync(newFolder)) {
		console.warn(`Target language folder ${newFolder} does not exist. Ending process.`);
		exit(1);
	}

	// load _shared.prompt.txt from the target language folder, or "" if it doesn't exist
	let sharedPrompt = '';
	try {
		sharedPrompt = await fs.promises.readFile(sharedPromptPath, 'utf-8');
	} catch (err) {
		if (err.code !== 'ENOENT') {
			throw err;
		}
	}
	// load the file specific prompt path/_file.prompt.txt , or "" if it doesn't exist
	let fileSpecificPrompt = '';
	try {
		fileSpecificPrompt = await fs.promises.readFile(fileSpecificPromptPath, 'utf-8');
	} catch (err) {
		if (err.code !== 'ENOENT') {
			throw err;
		}
		// ignore errors. fileSpecificPrompt will stay ""
	}

	const combinedPrompt = createPrompt(targetLangCode, refFile, sharedPrompt, fileSpecificPrompt);

	const taskInputHash = crypto
		.createHash('sha256')
		.update(combinedPrompt)
		.update(targetLangCode)
		.update(refFile.fileHash)
		.digest('hex')
		.slice(0, 16);

	// load target
	return {
		referenceFile: refFile,
		referenceLang: refFile.langCode,
		targetLanguageNameInEnglish: langNamesInEnglish[targetLangCode],
		targetLangCode: targetLangCode,
		targetFilePath: newPath,
		languagePrompt: sharedPrompt,
		fileSpecificPrompt: fileSpecificPrompt,
		combinedPrompt: combinedPrompt,
		taskInputHash: taskInputHash,
        targetRoundtripFilePath: targetRoundtripFilePath,
	};
}

// read front-matter from target file
async function readFrontMatter(filePath: string): Promise<Record<string, unknown>> {
	const content = await fs.promises.readFile(filePath, 'utf-8');
	const { data } = matter(content);
	return data;
}

// create a function to check if the target file for the given TranslationTask exists and has front-matter with taskInputHash matching
async function isTaskUpToDate(task: TranslationTask): Promise<boolean> {
	const targetFileExists = fs.existsSync(task.targetFilePath);
	if (!targetFileExists) {
		return false;
	}
	// load the target file
	const targetFileFrontMatter = await readFrontMatter(task.targetFilePath);
	// check if the front-matter has a taskInputHash that matches the taskInputHash
	const targetFileTaskInputHash = targetFileFrontMatter.taskInputHash as string;
	if (targetFileTaskInputHash !== task.taskInputHash) {
		return false;
	}
	return true;
}

async function createNeededTasks(referenceFolder: string, targetLangCode: string): Promise<TranslationTask[]>{
	const parsedRefFiles = await loadAndParseMdFiles(referenceFolder);

	// Create TranslationTasks for each parsedRefFiles, filter to the ones that are not up to date
	const allPossibleTasks = await Promise.all(
		parsedRefFiles.map((refFile) => createTranslationTaskFromReferenceFile(targetLangCode, refFile))
	);

	const nullableTasks = await Promise.all(
		allPossibleTasks.map(async (task) => {
            if (task.targetLangCode === task.referenceLang) {
                return null;
            }
			const isUpToDate = await isTaskUpToDate(task);
			if (!isUpToDate) {
				return task;
			}
            return null;
		}));
    // filter out nulls from nullableTasks into a new array
    return nullableTasks.filter((task) => task !== null) as TranslationTask[];
}

const configuration = new Configuration({
	apiKey: process.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



async function translateTask(task: TranslationTask) {

    let metadataPrompt = "Also carefully translate the title and description for the article; do not use &amp; or &lt; or &gt;\n1. " + task.referenceFile.data.title + "\n 2. " + task.referenceFile.data.description;

    const roundTripPrompt = "Translate the following to english, preserving all markdown, code blocks, and links. After the translation, list any mistakes or clumsy phrasing or grammar inside brackets, such as {{Note that the term used here is not the technical term...}}.\n";
    let conversation : openai.ChatCompletionRequestMessage[] = [
        {
            role: 'system',
            content: task.combinedPrompt,
        },
        {
            role: 'user',
            content: task.referenceFile.content,
        },
    ];
    console.log("Translating " + task.referenceFile.filePath + " to " + task.targetFilePath + " (" + task.targetLanguageNameInEnglish + ")");


	const completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: conversation,
	});

	const translatedRaw = completion.data.choices[0].message?.content || "";

	console.log(translatedRaw);

    conversation.push({
        role: completion.data.choices[0].message?.role,
        content: translatedRaw,
    });
    conversation.push({
        role: 'user',
        content: metadataPrompt,
    });
    const completion2 = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: conversation,
    });


    const translatedMetaRaw = he.decode(completion2.data.choices[0].message?.content);
    //html entity decode translatedMetaRaw
    
    
    var newTitle = translatedMetaRaw?.split("2.")[0].replace("1.", "")?.trim();
    var newDescription = translatedMetaRaw?.split("2.")[1]?.trim();

    // strip trailing whitespace from the above
	console.log(translatedMetaRaw);
    console.log(newTitle);
    console.log(newDescription);

    // create the target file frontmatter from task.referenceFile.data cloning it
    var newFrontMatter = {title: newTitle,
            description: newDescription,
            taskInputHash:task.taskInputHash,
            lang: task.targetLangCode,
            ...task.referenceFile.data};

    newFrontMatter.title = newTitle;
    newFrontMatter.description = newDescription;

    // serialize newFrontMatter to yaml
    const translatedFileContent = matter.stringify(translatedRaw, newFrontMatter);
    await fs.promises.writeFile(task.targetFilePath, translatedFileContent, 'utf-8');

    console.log("Wrote " + task.targetFilePath);
    
    console.log("Round-tripping translation...");
	const roundTripCompletion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
            {
                role: 'system',
                content: roundTripPrompt,
            },
            {
                role: 'user',
                content: translatedFileContent,
            },
        ],
	});
    const roundTripped = roundTripCompletion.data.choices[0].message?.content || "failed";

    const appendLog = "\n=====================\n\nContent prompt used: \n" + task.combinedPrompt + 
                "\n\nMetadata prompt used: \n" + metadataPrompt + 
                "\n\nMetadata returned" + translatedMetaRaw +
                " \n\n\nRoundtrip (isolated) prompt used: \n" + roundTripPrompt.replace("{{", "").replace("}}", "");

    await fs.promises.writeFile(task.targetRoundtripFilePath, roundTripped + appendLog, 'utf-8');
    console.log("Wrote " + task.targetRoundtripFilePath);
}



async function translateDocs(contentCollections: string[]) {
    
	const allFolders = 
		contentCollections.flatMap((contentCollection) => {
			return langFolderCodes.map((langFolderCode) => {
				return `./src/content/${contentCollection}/${langFolderCode}`;
			});
		});
	
	// create the folders for each language and coontent collection
    await Promise.all(
		allFolders.map(async (folder) => {
			if (!fs.existsSync(folder)){
				console.log("Creating folder " + folder);
				await fs.promises.mkdir(folder, { recursive: false });
			}
		})
	);
	
    // create a list of all the tasks that need to be done and flatten them (not slow)
    const allTasks = await Promise.all(
		contentCollections.map(async (contentCollection) => {
			return await Promise.all(langFolderCodes.map(async (langFolderCode) => {
				return await createNeededTasks(`./src/content/${contentCollection}/${SITE.defaultLanguage}`, langFolderCode);
			}));
		})
    ).then((tasks) => tasks.flat(2));

    // translate all the tasks
    await Promise.all(
        allTasks.map(async (task) => {
            await translateTask(task);
        }
    ));
}

async function translateOne() {
    const tasks = await createNeededTasks('./src/content/docs/en', 'es'); // get first result from createNeededTasks('es')
    if (tasks[0] != null) {
        await translateTask(tasks[0]);
    }
}
await translateDocs(['docs', 'imgstyle']);