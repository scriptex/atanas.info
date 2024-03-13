import info, { Package } from 'package-info';

import { log } from '@scripts/shared';
import { saveInsights } from '@insights/utils';

export type NPMPackage = Package & {
	homepage: string;
	downloads: number;
};

export type NPMResult = {
	sum?: number;
} & Record<string, NPMPackage>;

export const run = async (): Promise<NPMResult> => {
	const result: NPMResult = {};

	try {
		log('atanas.info: Fetching data from NPM. Please wait...');

		const today = new Date();
		const endDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

		const own = await fetch('https://api.npms.io/v2/search?q=author:scriptex&size=250&from=0').then(r => r.json());
		const co = await fetch('https://api.npms.io/v2/search?q=maintainer:scriptex&size=250&from=0').then(r =>
			r.json()
		);
		const names = Array.from(new Set([...own.results, ...co.results].map(p => p.package.name))).sort((a, b) => {
			if (a > b) {
				return 1;
			}

			if (a < b) {
				return -1;
			}

			return 0;
		});

		const data = [];

		for (const name of names) {
			const count = await fetch(`https://api.npmjs.org/downloads/range/2017-01-01:${endDate}/${name}`)
				.then(r => r.json())
				.then(response =>
					response.downloads
						.map((item: Record<string, number>) => item.downloads)
						.reduce((sum: number, curr: number) => sum + curr, 0)
				);

			data.push({
				name,
				count
			});
		}

		const sum = data.reduce((sum, curr) => sum + curr.count, 0);

		result.sum = sum;

		for (const item of data) {
			const { name, count } = item;

			log(`atanas.info: Fetching data for the ${name} package. Please wait...`);

			const packageInfo = await info(name);

			result[name] = { ...packageInfo, downloads: count, homepage: `https://www.npmjs.com/package/${name}` };
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
