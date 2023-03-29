// npm run translate
import { Configuration, OpenAIApi} from 'openai';
import openai from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import he from 'he';
import matter from 'gray-matter';
import { exit } from 'process';
import { SITE, FOLDER_TO_ENGLISH_NAMES, LANGUAGE_FOLDER_CODES} from '../src/consts';
const langNamesInEnglish = FOLDER_TO_ENGLISH_NAMES;
const langFolderCodes = LANGUAGE_FOLDER_CODES;
import { completeChatCached } from './openai_cache';

const GPT_MODEL = 'gpt-3.5-turbo';

import { ParsedMd, loadAndParseMdFiles, readFrontMatter, tryLoadFileString} from './markdown'

const newsArticlePrompt1 = `
        Here's an example ld+json file for a NewsArticle
        We don't include 'image' if there's no images.
        {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Title of a Documentation Article",
            "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
            ],
            "datePublished": "2015-02-05T08:00:00+08:00",
            "dateModified": "2015-02-05T09:20:00+08:00",
            "author": [{
                "@type": "Organization",
                "name": "Imazen",
                "url": "https://imazen.io"
                "logo": {
                    "@type": "ImageObject",
                    "url": "
                    https://www.imazen.io/img/imazen_400.png"
                    "width": 400,
                    "height": 119
                }
            }]
        }`;

const faqPagePrompt1 = `
        Here's an example ld+json file for a FAQPage
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is the purpose of this FAQ page?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "This FAQ page is a place to answer common questions about this website."
                }
            }],
            "author": [{
                "@type": "Organization",
                "name": "Imazen",
                "url": "https://imazen.io"
                "logo": {
                    "@type": "ImageObject",
                    "url": "
                    https://www.imazen.io/img/imazen_400.png"
                    "width": 400,
                    "height": 119
                }
            }]
        }`;

const howToPrompt1 = `
    Here's an example ld+json file for a FAQPage on making an image gallery using supplied images, Imageflow as the tool, and steps for markup.

    {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Create a responsive image gallery",
        "image": "https://example.com/photos/1x1/photo.jpg",
        "description": "Create a responsive image gallery using Imageflow.",
        "step": [{
            "@type": "HowToStep",
            "text": "First, upload your images to your S3 bucket.",
            "name": "Upload your images"
        },
        {
            "@type": "HowToStep",
            "text": "Then, install Imageflow as a dynamic image server to allow agile development and on-demand image sizing and optimization.",
            "name": "Install Imageflow"
        },
        {
            "@type": "HowToStep",
            "text": "Finally,create markup into your page and reference image urls with querystrings like ?format=webp&width=100&quality=70",
            "name": "Create the HTML and CSS"
        }
        ],
        "author": [{
            "@type": "Organization",
            "name": "Imazen",
            "url": "https://imazen.io"
            "logo": {
                "@type": "ImageObject",
                "url": "
                https://www.imazen.io/img/imazen_400.png"
                "width": 400,
                "height": 119
            }
        }]
    }`;



function createPrompts(
	referenceFile: ParsedMd
): string[] {

    const jsonType = referenceFile.data.structured_data_type ?? 'NewsArticle';
    const jsonTypePrompt = jsonType === 'NewsArticle' ? newsArticlePrompt1 : jsonType === 'FAQPage' ? faqPagePrompt1 : howToPrompt1;

    const prompt = `Create a JSON-LD file for the following page, using the @type = ${jsonType} schema. ` +
    `It's technical documentation from Imazen, so highlight key information and be concise. \n\n
    author: Imazen\n
    mainEntityOfPage: ${referenceFile.publishToUrl}\n`;
    return [jsonTypePrompt, prompt];
}

interface JsonTask {
	referenceFile: ParsedMd;
	referenceLang: string;
	targetFilePath: string;
	prompts: string[];
	taskInputHash: string;
    existingJson: any;
}



async function createTaskFromReferenceFile(
	refFile: ParsedMd
): Promise<JsonTask> {
    const dir = path.dirname(refFile.filePath);
    const basename = path.basename(refFile.filePath, '.md');
    const newPath = `${dir}/_json_ld_${basename}.json`;

    const prompts = createPrompts(refFile);

    const taskInputHash = crypto
    .createHash('sha256')
    .update(prompts.join('|'))
    .update(refFile.fileHash)
    .digest('hex')
    .slice(0, 32);


    // load json file from newPath, or "" if it doesn't exist
    let jsonFileText = await tryLoadFileString(newPath, '{}');

    // parse json file
    let jsonFile = JSON.parse(jsonFileText);

    return {
        referenceFile: refFile,
        referenceLang: refFile.langCode,
        targetFilePath: newPath,
        prompts: prompts,
        taskInputHash: taskInputHash,
        existingJson: jsonFile
    };
}



// create a function to check if the target file for the given TranslationTask exists and has front-matter with taskInputHash matching
async function isTaskUpToDate(task: JsonTask): Promise<boolean> {
	if (task.existingJson.taskInputHash === undefined) return false;
    return task.existingJson.taskInputHash === task.taskInputHash;
}


async function createNeededTasks(referenceFolder: string): Promise<JsonTask[]>{
    // return empty array if referenceFolder is not a directory
    if (!fs.lstatSync(referenceFolder).isDirectory()) return [];

	const parsedRefFiles = await loadAndParseMdFiles(referenceFolder);

	// Create TranslationTasks for each parsedRefFiles, filter to the ones that are not up to date
	const allPossibleTasks = await Promise.all(
		parsedRefFiles.map((refFile) => createTaskFromReferenceFile(refFile))
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
    return nullableTasks.filter((task) => task !== null) as JsonTask[];
}


const configuration = new Configuration({
	apiKey: process.env.VITE_OPENAI_API_KEY,
});
const openapi = new OpenAIApi(configuration);

async function generateJsonTask(task: JsonTask) {

    let conversation : openai.ChatCompletionRequestMessage[] =  task.prompts.map((prompt) => {
        return {
            "content": prompt,
            role: 'user',
        }
    });

    console.log("Generating json for  " + task.referenceFile.filePath + " to " + task.targetFilePath);


	const completion = await completeChatCached({
		model: GPT_MODEL,
		messages: conversation,
	}, openapi);

	const translatedRaw = completion.choices[0].message?.content || "";
	console.log(translatedRaw);

    // validate translatedRaw is valid json
    try {
        const parsedJson = JSON.parse(translatedRaw);
        // validate parsedJson schema

        // write parsedJson to task.targetFilePath, wrapping it in { "taskInputHash": task.taskInputHash,"json": parsedJson"}
        const jsonToWrite = { "taskInputHash": task.taskInputHash,"json": parsedJson};
        const jsonToWriteString = JSON.stringify(jsonToWrite, null, 4);
        await fs.promises.writeFile(task.targetFilePath, jsonToWriteString);
        console.log("Wrote " + task.targetFilePath);
    } catch (e) {
        console.error("Skipping: Invalid JSON generated for " + task.referenceFile.filePath);
        return;
    }
}


async function generateFor(contentCollections: string[]) {
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
            await generateJsonTask(task);
        }
    ));
}

async function generateOne() {
    const tasks = await createNeededTasks('./src/content/docs/en'); // get first result from createNeededTasks('es')
    if (tasks[0] != null) {
        await generateJsonTask(tasks[0]);
    }
}
await generateOne();
//await generateFor(['docs', 'imgstyle']);