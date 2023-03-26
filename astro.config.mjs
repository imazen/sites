import { defineConfig } from 'astro/config';
import { KNOWN_LANGUAGES } from './src/consts.ts';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
  // Enable Preact to support Preact JSX components.
  preact(),
  // Enable React for the Algolia search component.
  react(), 
  sitemap({
	i18n: {
        defaultLocale: 'en',   // All urls that don't contain `es` or `fr` after `https://www.srcset.tips/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en',         // The `defaultLocale` value must present in `locales` keys
          es: 'es',
          de: 'de',
		  sv: 'sv',
		  zh: 'zh-Hans',
		  it: 'it',
		  fr: 'fr',
		  ja: 'ja',
        },
      },
  })],
  site: `https://www.srcset.tips`
});