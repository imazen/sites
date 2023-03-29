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

function getFolderCodeFromPath(filePath: string, defaultValue: string): string {
	const segments = filePath.split('/');
	//return the first segment that matches a langFolderCodes entry
	const folderCode = segments.find((s) => langFolderCodes.includes(s));
	return folderCode || defaultValue;
}

//get the part of the path after the language code
function estimatePublishPath(filePath: string): string {
    const segments = filePath.split('/');
    const langCode = getFolderCodeFromPath(filePath, SITE.defaultLanguage);
    const langCodeIndex = segments.indexOf(langCode);
    const relativePath = segments.slice(langCodeIndex).join('/');
    // remove file extension
    return relativePath.replace(/\.[a-z]+]$/, '');
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
        fileString: content,
        publishToUrl: SITE.address + '/' + estimatePublishPath(filePath),
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

// read front-matter from target file
export async function readFrontMatter(filePath: string): Promise<Record<string, unknown>> {
	const content = await fs.promises.readFile(filePath, 'utf-8');
	const { data } = matter(content);
	return data;
}

export interface ParsedMd {
	filePath: string;
	fileHash: string;
	langCode: string;
	content: string;
    fileString: string;
	data: Record<string, unknown>;
    publishToUrl: string; // assumes only one content collection per site
}

export async function loadAndParseMdFiles(directory: string): Promise<ParsedMd[]> {
	return processDirectory(directory);
}


export async function tryLoadFileString(filePath: string, defaultString: string): Promise<string> {
    try {
        return await fs.promises.readFile(filePath, 'utf-8');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }
    return defaultString;
}