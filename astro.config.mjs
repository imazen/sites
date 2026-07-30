import { defineConfig } from 'astro/config';
import { SITE, SITEMAP_LOCALES } from './src/consts.ts';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import vercel from '@astrojs/vercel/static';

// Cloudflare Pages sets CF_PAGES=1 in its build container. There we emit plain
// static output into outDir; on Vercel we keep the adapter so .vercel/output is
// produced. Both hosts build from this branch during the migration window, so a
// cutover (or rollback) is a DNS change with no code change.
const onCloudflarePages = process.env.CF_PAGES === '1';

console.log("Ouput dir: " + SITE.outDir);
// https://astro.build/config
export default defineConfig({
	trailingSlash: "always", //Sitemap uses trailing /, we gotta be consistent. This affects dev and production differently
	outDir: SITE.outDir,
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
		serialize(sitemapItem) {

			return sitemapItem;
		},
	}),
	astroI18next()
	],
  site: SITE.address,
	output: 'static',
	...(onCloudflarePages ? {} : { adapter: vercel({analytics: true}) })
});
