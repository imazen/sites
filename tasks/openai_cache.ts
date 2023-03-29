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
        const response = await api.createChatCompletion(request);
        // save the response to the cache folder
        await fs.promises.writeFile(cachePath, JSON.stringify(response.data));
        return response.data;
    }
}
