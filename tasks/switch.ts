import { switchSite } from "./switch_sites";

const site = process.argv[2];
if (!site) {
	console.error("Please specify site key such as 'srcset' or 'imgstyle'. Ex. npm run switch -- srcset OR npm run switch -- imgstyle");
}else{
	const force = process.argv[3];
	// log all arguments
	//console.log('args', process.argv);

	switchSite(site, force === '--force');
}

