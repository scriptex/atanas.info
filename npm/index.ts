import info, { Package } from 'package-info';

import { saveInsights } from '@insights/utils';
import { log } from '@scripts/shared';

export type NPMPackage = Package & {
	downloads: number;
	homepage: string;
};

export type NPMResult = {
	sum?: number;
} & Record<string, NPMPackage>;

const names = [
	'@three11/accordion',
	'@three11/animate-top-offset',
	'@three11/debounce',
	'@three11/dom-helpers',
	'@three11/extract-query-arg',
	'@three11/infinite-scroll',
	'@three11/istouch',
	'@three11/optisize',
	'@three11/scrollspy',
	'animateme',
	'async-array-prototype',
	'attr-i18n',
	'create-pwa',
	'create-react-app-ts',
	'dator',
	'gitlab-calendar',
	'hover-media-query',
	'html-head-component',
	'html5-form-validator',
	'introscroll',
	'itcss',
	'itscss',
	'lastfm-ts-api',
	'localga',
	'node-mysql-client',
	'npm-maintainer',
	'pass-score',
	'postcss-watch-folder',
	'random-splice',
	'react-accordion-ts',
	'react-dropper',
	'react-round-carousel',
	'react-svg-donuts',
	'round-carousel-component',
	'scriptex-socials',
	'scss-goodies',
	'simple-calendar-widget',
	'svg-symbol-sprite',
	'svg64',
	'svgo-add-viewbox',
	'svgo-viewbox',
	'touchsweep',
	'typed-usa-states',
	'universal-github-client',
	'webpack-mpa',
	'webpack-mpa-next',
	'webpack-mpa-ts'
];

export const run = async (): Promise<NPMResult> => {
	const result: NPMResult = {};

	try {
		log('atanas.info: Fetching data from NPM. Please wait...');

		const today = new Date();
		const endDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

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
				count,
				name
			});
		}

		const sum = data.reduce((sum, curr) => sum + curr.count, 0);

		result.sum = sum;

		for (const item of data) {
			const { count, name } = item;

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
