import { switchSite } from "./switch_sites";
import { CONTENT_COLLECTIONS } from "../src/consts";

const site = process.argv[2];
if (!site) {
	console.error("Please specify site key such as 'srcset' or 'imgstyle'. Ex. npm run switch -- srcset OR npm run switch -- imgstyle");
}else{
	switchSite(site);
}

