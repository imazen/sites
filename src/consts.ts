export const SITE = {
	title: 'srcset reference and tips', // Used for logo text and og:sitename
	titleSuffix: ' - srcset.tips', // Appended to page content title
	description: 'Templates, guides, examples, and tools for correct and efficient responsive images',
	defaultLanguage: 'en-us',
} as const;
export const OPEN_GRAPH = {
	image: {
		src: 'https://---github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	"English": "en",
	"Français": "fr",
	"Español": "es",
	"Deutsch": "de",
	"Svenska": "sv",
	"简体中文": "zh",
	"Italiano": "it",
	"日本語": "ja"
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/imazen/sites/tree/main`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

