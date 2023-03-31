// npm run translate
import {
	CONTENT_COLLECTIONS,
} from '../src/consts';

import {updateFrontmatterDates} from './markdown'

await updateFrontmatterDates(CONTENT_COLLECTIONS);
