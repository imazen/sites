import { defineCollection, z } from 'astro:content';
import { SITE } from '../consts';

const all = defineCollection({
	schema: z.object({
		title: z.string().default(SITE.title),
		description: z.string().default(SITE.description),
		sidebar_sort_priority: z.number().optional(),
		lang: z.string().default(SITE.defaultLanguage),
		dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
		datePublished: z.date().optional(),
		dateUpdated: z.date().optional(),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		ogLocale: z.string().optional(),
	}),
});

export const collections = { 'docs': all, 'imgstyle':'all' };
