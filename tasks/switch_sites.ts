import fs from 'fs';
import path from 'path';
import { SITES_KEYS } from "../src/consts";

async function searchFilenamesRecursive(directory: string, include: string): Promise<string[]> {
	const entries = await fs.promises.readdir(directory, { withFileTypes: true });
	const files: string[] = [];

	for (const entry of entries) {
		const fullPath = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			const subDirectoryFiles = await searchFilenamesRecursive(fullPath, include);
			files.push(...subDirectoryFiles);
		} else if (entry.isFile() && entry.name.includes(include)) {
			files.push(fullPath);
		}
	}
	return files;
}

async function switchSymlinks(directory: string, newSitekey: string) {
	const searchPart = `.${newSitekey}.`;
	const files = await searchFilenamesRecursive(directory, searchPart);
	for (const newFile of files) {
		const defaultFile = newFile.replace(searchPart, '.');
		// Check if defaultFile is a symlink
		const stats = await fs.promises.lstat(defaultFile);
		if (stats.isSymbolicLink()) {
			// print what it points to
			const link = await fs.promises.readlink(defaultFile);
			// if link is already newFile, skip
			if (link === newFile) {
				console.log('Link already exists from ' + defaultFile + " to " + link);
				continue;
			}
			console.log('Unlinking ' + defaultFile + ' from using ' + link);
			// delete symlink
			await fs.promises.unlink(defaultFile);
			// symlink defaultFile to newFile
			console.log('Linking ' + defaultFile + ' to use ' + newFile);
			await fs.promises.symlink(newFile, defaultFile);
		} else {
			console.log('!!!! Error, not a symlink: ' + defaultFile);

			console.log('Not a symlink');
		}
	}
}
export async function switchSite(siteKey: string) {
	// check siteKey is valid
	if (!SITES_KEYS.includes(siteKey)) {
		console.log('Error: invalid site key (' + siteKey + ')');
		return;
	}

	console.log('Switching active site to ' + siteKey);

	// check the current folder contains 'astro.config.mjs', if not fail
	const astroConfigPath = path.join(process.cwd(), 'astro.config.mjs');
	if (!fs.existsSync(astroConfigPath)) {
		console.log('Error: astro.config.mjs not found in current directory. Run this from root');
		return;
	}

	await switchSymlinks(process.cwd(), siteKey);
}
