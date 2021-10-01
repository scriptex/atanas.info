/* eslint-disable @typescript-eslint/ban-ts-comment */
import { resolve } from 'path';
import { writeFileSync } from 'fs';

// @ts-ignore
import * as info from 'package-info';
// @ts-ignore
import * as npmtotal from 'npmtotal';

(async () => {
	const result: Record<string, any> = {};

	try {
		console.log('Fetching data from NPM. Please wait...');

		const { sum, stats } = await npmtotal('scriptex', '2017-01-01');

		const packages = stats.sort(([a]: [string], [b]: [string]) => (a > b ? 1 : a < b ? -1 : 0));

		result.sum = sum;

		for (const entry of packages) {
			const [name, downloads] = entry;

			console.log(`Fetching data for the ${name} package. Please wait...`);

			const packageInfo = await info(name);

			result[name] = { ...packageInfo, downloads, homepage: `https://www.npmjs.com/package/${name}` };
		}

		console.log('Successfully saved stats for NPM packages');
	} catch (e) {
		console.log('Error saving stats for NPM packages');
	}

	await writeFileSync(resolve(__dirname, '../src/scripts/npm-stats.json'), JSON.stringify(result, null, 2));
})();
