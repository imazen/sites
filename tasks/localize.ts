// npm run localize
// Borrowed heavily from https://github.com/ObservedObserver/chatgpt-i18n

import { Configuration, OpenAIApi, openai } from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import matter from 'gray-matter';
import { exit } from 'process';



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

export function compressValuesInJson (conentJson: any, path: string, pairs: [string, any][]) {
    if (typeof conentJson === 'object') {
        Object.keys(conentJson).forEach(k => {
            let p = path
            if (p.length !== 0) {
                p += '.'
            }
            p += k;
            if (typeof conentJson[k] !== 'object') {
                pairs.push([p, conentJson[k]])
            } else {
                compressValuesInJson(conentJson[k], p, pairs)
            }
        })
    } else {
        pairs.push([path, conentJson])
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

const configuration = new Configuration({
	apiKey: process.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



async function translate(inputJson: any, targetLang: string) {
    const locale = JSON.parse(inputJson);
    const pairs: [string, any][] = []
    compressValuesInJson(locale, '', pairs);

    const { requireTranslation, noTranslation } = groupPairs(pairs)

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `You are a great translate bot. Translate a i18n locale array content to ${targetLang}. It's a array structure, contains many strings, translate each of them and make a new array of translated strings. Consider all the string as a context to make better translation.\n`,
            },
            {
                role: "user",
                content: JSON.stringify(requireTranslation.map(t => t[1]))
            }
        ]
    });
    const translatedRaw = matchJSON(`${completion.data.choices[0].message?.content}`);
    // const translatedRaw = matchJSON(`${JSON.stringify(requireTranslation)}`);

    const translated = JSON.parse(translatedRaw) as string[];

    const nextPairs = (translated.map((t, i) => [requireTranslation[i][0], t]) as [string, string][]).concat(noTranslation);
    const result = buildJsonByPairs(nextPairs);
    return JSON.stringify(result, null, 1);
}

const langNamesInEnglish = {
	en: 'English',
	fr: 'French',
	es: 'Spanish',
	de: 'German',
	sv: 'Swedish',
	zh: 'Simplified Chinese',
	it: 'Italian',
	ja: 'Japanese',
};

// create a file ./public/locales/{lang}/translation.json from ./public/locales/en/translation.json using the translate function
// for each language in langNamesInEnglish
async function localize() {
    // subtract en from langNamesInEnglish
    const langs = Object.keys(langNamesInEnglish).filter((lang) => lang !== 'en');
    
    const inputJson = fs.readFileSync('./public/locales/en/translation.json', 'utf-8');
    // Do translate in parallel for all langs
    await Promise.all(
        langs.map(async (lang) => {
            const langNameInEnglish = langNamesInEnglish[lang];
            console.log(`Translating to ${lang} (${langNameInEnglish})...`);
            const translated = await translate(inputJson, langNameInEnglish);
            // write the translated file asynchronously to `./public/locales/${lang}/translation.json`
            fs.writeFile(`./public/locales/${lang}/translation.json`, translated, () => {
                console.log(`Translated to ${lang} (${langNameInEnglish})`);
            });
        }));
    }
await localize();
