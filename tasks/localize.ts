// npm run localize
// Borrowed heavily from https://github.com/ObservedObserver/chatgpt-i18n

import openai from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import matter from 'gray-matter';
import { exit } from 'process';
import { completeChatCached } from './openai_cache';
import { LANGUAGES } from '../src/consts';


// this is an non-accurate way to estimate token numbers;
// content is a json string
// estimate the word count in content and return the word count
export function estimateTokenCount(content: any): number {
    console.log(content)
    if (typeof content === 'string') {
        return content.split(' ').length;
    }
    if (content instanceof Array) {
        let count = 0;
        for (let item of content) {
            count += estimateTokenCount(item);
        }
        return count;
    }
    if (typeof content === 'object') {
        let count = 0;
        for (let key in content) {
            count += estimateTokenCount(content[key]);
        }
        return count;
    }
    return 1
}

export function compressValuesInJson (contentJson: any, path: string, pairs: [string, any][]) {
    if (typeof contentJson === 'object') {
        Object.keys(contentJson).forEach(k => {
            let p = path
            if (p.length !== 0) {
                p += '.'
            }
            p += k;
            if (typeof contentJson[k] !== 'object') {
                pairs.push([p, contentJson[k]])
            } else {
                compressValuesInJson(contentJson[k], p, pairs)
            }
        })
    } else {
        pairs.push([path, contentJson])
    }
}

/**
 * group pairs into two category, pairs need to be translated or not
 * @param pairs 
 */
export function groupPairs (pairs: [string, any][]): {
    requireTranslation: [string, string][],
    noTranslation: [string, any][]
} {
    const requireTranslation: [string, string][] = [];
    const noTranslation: [string, string][] = [];
    for (let pair of pairs) {
        if (typeof pair[1] === 'string') {
            requireTranslation.push(pair)
        } else {
            noTranslation.push(pair)
        }
    }
    return {
        requireTranslation,
        noTranslation
    }
}

export function buildJsonByPairs (pairs: [string, any][]) {
    let ans: any = {};
    for (let pair of pairs) {
        const path = pair[0];
        const keys = path.split('.');
        let kIndex = 0;
        let node = ans;
        while (kIndex < keys.length - 1) {
            if (typeof node[keys[kIndex]] === 'undefined') {
                node[keys[kIndex]] = {} as any
            }
            node = node[keys[kIndex]]
            kIndex++;
        }
        node[keys[kIndex]] = pair[1]
    }
    return ans;
}

function matchJSON (str: string) {
    let start = 0;
    let end = 0;
    let stack: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[') {
            if (stack.length === 0) {
                start = i;
            }
            stack.push('[');
        }
        if (str[i] === ']') {
            stack.pop();
            if (stack.length === 0) {
                end = i;
                break;
            }
        }
    }
    return str.slice(start, end + 1);
}

const configuration = new openai.Configuration({
	apiKey: process.env.VITE_OPENAI_API_KEY,
});
const openapi = new openai.OpenAIApi(configuration);



async function translate(inputJson: any, targetLang: string) {
    const locale = JSON.parse(inputJson);
    const pairs: [string, any][] = []
    compressValuesInJson(locale, '', pairs);

    const { requireTranslation, noTranslation } = groupPairs(pairs)

    const completion = await completeChatCached({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `You are a great translate bot optimized for technical websites. Translate a i18n locale array content to ${targetLang}. It's a array structure, contains many strings, translate each of them and make a new array of translated strings. Consider all the string as a context to make better translation.\n`,
            },
            {
                role: "user",
                content: JSON.stringify(requireTranslation.map(t => t[1]))
            }
        ]
    },openapi);
    const translatedRaw = matchJSON(`${completion.choices[0].message?.content}`);
    // const translatedRaw = matchJSON(`${JSON.stringify(requireTranslation)}`);

    const translated = JSON.parse(translatedRaw) as string[];

    const nextPairs = (translated.map((t, i) => [requireTranslation[i][0], t]) as [string, string][]).concat(noTranslation);
    const result = buildJsonByPairs(nextPairs);
    return JSON.stringify(result, null, 1);
}


interface LoadedFile{
    path: string;
    content: string;
}
async function readFiles(dir: string): Promise<LoadedFile[]> {
    try {
      const files = await fs.promises.readdir(dir);
      const promises = files.map(async (file) => {
        const filePath = `${dir}/${file}`;
        const inputJson = await fs.promises.readFile(filePath, 'utf-8');
        return { path: filePath, content: inputJson } as LoadedFile;
      });
      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

interface LocalizeTask{
    folderLangCode: string;
    langNameInEnglish: string;
    targetPath: string;
    input: LoadedFile;
}


// create a file ./public/locales/{lang}/translation.json from ./public/locales/en/translation.json using the translate function
// for each language in langNamesInEnglish
async function localize() {

    // for each english file
    const files = await readFiles('./public/locales/en/');

    // generate tasks
    const tasks: LocalizeTask[] = [];
    for (const file of files) {
        for (const lang of LANGUAGES) {
            if (lang.folderCode === 'en') {
                continue;
            }
            // get basename of the file without extension
            const basename = path.basename(file.path);
            
            tasks.push({
                folderLangCode: lang.folderCode,
                langNameInEnglish: lang.englishName,
                input: file,
                targetPath: `./public/locales/${lang.folderCode}/${basename}`,
            })
        }
    }

    
    // Do translate in parallel for all langs
    await Promise.all(
        tasks.map(async (task) => {
            const { folderLangCode: lang, langNameInEnglish, input } = task;
            console.log(`Translating ${input.path} to ${lang} (${langNameInEnglish})...`);
            const translated = await translate(input.content, langNameInEnglish);
            // write the translated file asynchronously to `./public/locales/${lang}/{path}.json`
            await fs.promises.writeFile(task.targetPath, translated);
            console.log(`Translated to ${lang} (${langNameInEnglish})`);

						// now roundtrip back to english as _roundtrip_{path}
						const roundtripPath = `./public/locales/${lang}/_roundtrip_${path.basename(task.targetPath)}`;
						const roundtrip = await translate(translated, 'English');
						await fs.promises.writeFile(roundtripPath, roundtrip);
						console.log(`Round-tripped to ${lang} (${langNameInEnglish})`);
            
        }));
    }
await localize();
