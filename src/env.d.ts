/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string | undefined;
	readonly VITE_LOCIZE_API_KEY: string | undefined;
	
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
