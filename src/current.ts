import { SITE } from './consts';

import type { CollectionEntry } from 'astro:content';

export type CurrentCollectionEntry = CollectionEntry<typeof SITE.contentCollection>;
