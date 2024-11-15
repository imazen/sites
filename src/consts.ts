import SITE_INFO from './site-info';

export const SITE = SITE_INFO;

export const SITES_KEYS = ['srcset', 'imgstyle'];

export const CONTENT_COLLECTIONS = ['docs', 'imgstyle'];

export const GITHUB_EDIT_URL = `https://github.com/imazen/sites/tree/main`;
export const REPORT_ISSUE_URL = "https://github.com/imazen/sites/issues/new";
export const COMMUNITY_INVITE_URL = null; //`https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: SITE.algoliaIndex,
	appId: 'H4NCQEU4H9',
	apiKey: '21c91faada5939dbb3cb23265cbd2e8f',
	dataDomain: SITE.algoliaDomain
};


// define a type with 'langCode', 'folderCode', 'name', 'englishName'
export type Language = {
	langCode: string;
	folderCode: string;
	name: string;
	englishName: string;
};

export const LANGUAGES: Language[] = [
	{ langCode: 'en', folderCode: 'en', name: 'English', englishName: 'English' },
	{ langCode: 'fr', folderCode: 'fr', name: 'Français', englishName: 'French' },
	{ langCode: 'es', folderCode: 'es', name: 'Español', englishName: 'Spanish' },
	{ langCode: 'de', folderCode: 'de', name: 'Deutsch', englishName: 'German' },
	{ langCode: 'sv', folderCode: 'sv', name: 'Svenska', englishName: 'Swedish' },
	{ langCode: 'zh-Hans', folderCode: 'zh', name: '简体中文', englishName: 'Simplified Chinese' },
	{ langCode: 'it', folderCode: 'it', name: 'Italiano', englishName: 'Italian' },
	{ langCode: 'ja', folderCode: 'ja', name: '日本語', englishName: 'Japanese' },
];

export const i18n_CONFIG = {
		locales: LANGUAGES.map((lang) => { return lang.langCode }), // must include defaultLocale
		defaultLocale: SITE.defaultLanguage,
		defaultNamespace: SITE.translationNamespace,
		localePath: './public/locales',
}

// FOLDER_TO_LANGUAGES is a hash derived from Language.folderCode keys and has values from Language.name
export const FOLDER_TO_ENGLISH_NAMES = LANGUAGES.map((lang) => {
	return { [lang.folderCode]: lang.englishName };
}).reduce((acc, cur) => {
	return { ...acc, ...cur };
}, {});


//LOCALES_i18n is a hash derived from Language.folderCode keys and has values from Language.langCode
// transform LANGUAGES into LOCALES_i18n with map
export const SITEMAP_LOCALES = LANGUAGES.map((lang) => {
	return { [lang.folderCode]: lang.langCode };
}).reduce((acc, cur) => {
	return { ...acc, ...cur };
}, {});


// KNOWN_LANGUAGES is a hash derived from Language.folderCode keys and has values from Language.name
// transform LANGUAGES into KNOWN_LANGUAGES with map
export const KNOWN_LANGUAGES = LANGUAGES.map((lang) => {
	return { [lang.name]: lang.folderCode };
}).reduce((acc, cur) => {
	return { ...acc, ...cur };
}, {});

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
export const LANGUAGE_FOLDER_CODES = KNOWN_LANGUAGE_CODES;

export const OPENAI_TRANSLATE_MODEL="gpt-4o"
export const OPENAI_FEEDBACK_MODEL="gpt-4o"

export const OPEN_GRAPH = {
	image: {
		src: 'https://---github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'imageflow_io',
};

