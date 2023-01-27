import info from 'package-info';
import npmtotal from 'npmtotal';
import { saveInsights } from '@insights/utils';

(async () => {
	const result: Record<string, any> = {};

	try {
		console.log('atanas.info: Fetching data from NPM. Please wait...');

		const { sum, stats } = await npmtotal('scriptex', { startDate: '2017-01-01' });

		const packages = stats.sort(([a]: [string, number], [b]: [string, number]) => (a > b ? 1 : a < b ? -1 : 0));

		result.sum = sum;

		for (const entry of packages) {
			const [name, downloads] = entry;

			console.log(`atanas.info: Fetching data for the ${name} package. Please wait...`);

			const packageInfo = await info(name);

			result[name] = { ...packageInfo, downloads, homepage: `https://www.npmjs.com/package/${name}` };
		}

		console.log('atanas.info: Successfully saved stats for NPM packages');
	} catch (e) {
		console.log('atanas.info: Error saving stats for NPM packages', e);
	}

	await saveInsights(result, 'NPM');

	process.exit();
})();
