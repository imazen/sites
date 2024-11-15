import openai from 'openai';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const AI_CACHE_DIR = './.aicache';

// Create an api that hashes inputs and returns a cached result if it exists, otherwise runs the function and caches the result
// the cache will be a .aicache folder in the root of the project

// returns just the .data portion of the typical response
export async function completeChatCached(request: openai.CreateChatCompletionRequest, api: openai.OpenAIApi, cacheFolder: string = AI_CACHE_DIR) : Promise<openai.CreateChatCompletionResponse>{    // hash the request
    const requestJSON = JSON.stringify(request !== undefined ? request : {});
    const hash = crypto.createHash('sha256');
    hash.update(requestJSON);
    const hashHex = hash.digest('hex');

    // create the cache folder if it doesn't exist
    if (!fs.existsSync(cacheFolder)) {
        fs.mkdirSync(cacheFolder);
    }
    // check if the hash exists in the cache folder
    const cachePath = path.join(cacheFolder, hashHex + '.json');

    if (fs.existsSync(cachePath)) {
        // read the file from cachePath
        const jsonString = await fs.promises.readFile(cachePath, 'utf8');

        console.log("Getting AI response from cache")
        // load JSON from cachePath and parse into CreateChatCompletionResponse
        return JSON.parse(jsonString) as openai.CreateChatCompletionResponse;

    }else{
        // run the request
				// handle Error: Request failed with status code 429 (too many requests) by waiting an increasing number seconds - randomized +/- 3 seconds, with a 2 second minimum and trying again
				let response: openai.CreateChatCompletionResponse;
				let attemptCount = 0;
				while (true) {
					try {
						response = (await api.createChatCompletion(request)).data;
						break;
					} catch (error) {
						if (attemptCount > 10) throw error;
						if (error.message.includes('429') || error.message.includes('500') || error.message.includes('502') || error.message.includes('503') || error.message.includes('504')) {
							let maxWaitTime = Math.min(40, (attemptCount + 2) * 2);
							let minWaitTime = Math.min(1, attemptCount);
							

							let waitTime = (Math.random() * (maxWaitTime - minWaitTime)) + minWaitTime;
							console.log(`${error.message}, waiting ${waitTime} seconds before trying again`);
							await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
							waitTime = Math.min(waitTime + Math.floor(Math.random() * 6) - 3, 60);
						} else {
							throw error;
						}
					}
				}
			
        // save the response to the cache folder
        await fs.promises.writeFile(cachePath, JSON.stringify(response));
        return response;
    }
}
