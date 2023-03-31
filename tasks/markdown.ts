import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import matter from 'gray-matter';
import { SITE, FOLDER_TO_ENGLISH_NAMES, LANGUAGE_FOLDER_CODES} from '../src/consts';
import {execa} from 'execa';
import { CurrentCollectionEntry } from '../src/current'


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
	data: CurrentCollectionEntry['data'];
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



interface GitDates {
	parsedFile: ParsedMd;
	firstCommitDate: Date;
	lastCommitDate: Date;
}
async function getGitDates(parsedFile: ParsedMd) {
	const gitDates: GitDates = {
		firstCommitDate: new Date(),
		lastCommitDate: new Date(),
		parsedFile: parsedFile,
	};
	const gitLog = await execa('git', ['log', '--follow', '--format=%at', parsedFile.filePath]);
	const commitDates = gitLog.stdout.split('\n').map((date) => new Date(parseInt(date) * 1000));
	gitDates.firstCommitDate = commitDates[commitDates.length - 1];
	gitDates.lastCommitDate = commitDates[0];
	return gitDates;
}

export async function updateFrontmatterDates(contentCollections: string[]) {
	const allFolders = contentCollections.flatMap((contentCollection) => {
		return `./src/content/${contentCollection}/${SITE.defaultLanguage}`;
	});

	// For each folder, run loadAndParseMdFiles()
	const allParsedFiles = (
		await Promise.all(allFolders.map((folder) => loadAndParseMdFiles(folder)))
	).flat();

	// for each parsed file, check the git log for the first and last commit date
	const withDates = await Promise.all(allParsedFiles.map((parsedFile) => getGitDates(parsedFile)));

	// for each parsed file, check if the frontmatter has the git dates and they are up to date
	// otherwise write the new file to disk
	for (const gitDates of withDates) {
		const { firstCommitDate, lastCommitDate, parsedFile } = gitDates;
		const { data, content } = gitDates.parsedFile;

		if (data.title == null) {
			// skip
			console.log(`skipping ${parsedFile.filePath} because it has no title`);
			continue;
		}

		// in YYYY-MM-DD format
		const firstCommitDateString = firstCommitDate.toISOString().split('T')[0];
		const lastCommitDateString = lastCommitDate.toISOString().split('T')[0];
		// get the data.date_published  and data.date_modified
		// Parse them and convert them to YYYY-MM-DD format
		// if they are not the same as the git dates, write the new file to disk

		const dataDatePublished = data.date_published;
		const dataDateModified = data.date_modified;
		if (dataDatePublished != null && dataDateModified != null) {
			const dataDatePublishedString = new Date(dataDatePublished).toISOString().split('T')[0];
			const dataDateModifiedString = new Date(dataDateModified).toISOString().split('T')[0];
			if (
				dataDatePublishedString === firstCommitDateString &&
				dataDateModifiedString === lastCommitDateString
			) {
				// skip
				continue;
			}
		}

		data.date_published = firstCommitDateString;
		data.date_modified = lastCommitDateString;
		const newFileContent = matter.stringify(content, data);

		// update the file
		await fs.promises.writeFile(parsedFile.filePath, newFileContent);
		console.log(`Updated ${parsedFile.filePath}`);
	}
}
