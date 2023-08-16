import info, { Package } from 'package-info';
import npmtotal from 'npmtotal';

import { log } from '@scripts/shared';
import { saveInsights } from '@insights/utils';

export type NPMPackage = Package & {
	homepage: string;
	downloads: number;
};

export type NPMResult = {
	sum?: number;
} & Record<string, NPMPackage>;

export const run = async () => {
	const result: NPMResult = {};

	try {
		log('atanas.info: Fetching data from NPM. Please wait...');

		const { sum, stats } = await npmtotal('scriptex', { startDate: '2017-01-01' });

		const packages = [...stats].sort(([a], [b]) => {
			if (a > b) {
				return 1;
			}

			if (a < b) {
				return -1;
			}

			return 0;
		});

		result.sum = sum;

		for (const entry of packages) {
			const [name, downloads] = entry;

			log(`atanas.info: Fetching data for the ${name} package. Please wait...`);

			const packageInfo = await info(name);

			result[name] = { ...packageInfo, downloads, homepage: `https://www.npmjs.com/package/${name}` };
		}

		log('atanas.info: Successfully saved stats for NPM packages');
	} catch (e) {
		log(`atanas.info: Error saving stats for NPM packages: ${e}`);
	}

	await saveInsights(result, 'NPM');

	return result;
};

if (!process.env.JEST_WORKER_ID) {
	(async () => {
		await run();
		process.exit();
	})();
}
