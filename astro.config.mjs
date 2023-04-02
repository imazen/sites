import { defineConfig } from 'astro/config';
import { SITE, SITEMAP_LOCALES } from './src/consts.ts';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import vercel from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  integrations: [
	// Enable Preact to support Preact JSX components.
	preact(),
	// Enable React for the Algolia search component.
	react(), 
	sitemap({
		i18n: {
			defaultLocale: SITE.defaultLanguage,   // All urls that don't contain `es` or `fr` after `domain.com/` will be treated as default locale, i.e. `en`
			locales: SITEMAP_LOCALES,
		},
	}),
	astroI18next()
	],
  site: SITE.address,
	output: 'static',
	adapter: vercel({analytics: true})
});
