import { randomBytes } from 'node:crypto';

import info, { Package } from 'package-info';

import { saveInsights } from '@insights/utils';
import { log } from '@scripts/shared';

export type NPMResponse = {
	downloads: Array<{
		day: string;
		downloads: number;
	}>;
	end: string;
	package: string;
	start: string;
};

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

function randomFloat() {
	const buf = randomBytes(4);
	const num = buf.readUInt32BE(0);
	return num / 0xffffffff;
}

async function fetchPackageDownloads(name: string, maxRetries = 3) {
	const today = new Date();
	const endDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
	const startDate = '2017-01-01';
	const url = `https://api.npmjs.org/downloads/range/${startDate}:${endDate}/${name}`;

	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			const res = await fetch(url);

			if (!res.ok) {
				log(`atanas.info: ❌ [${name}] HTTP ${res.status} ${res.statusText}`);

				throw new Error(`HTTP ${res.status}`);
			}

			const text = await res.text();

			if (!text.trim().startsWith('{')) {
				log(`atanas.info: ⚠️  [${name}] Response not JSON (probably rate-limited)`);

				throw new Error('Non-JSON response');
			}

			const json = JSON.parse(text) as NPMResponse;
			const count = json.downloads ? json.downloads.reduce((sum, d) => sum + d.downloads, 0) : 0;

			log(`atanas.info: ✅ [${name}] ${count.toLocaleString()} downloads`);

			return count;
		} catch (err: unknown) {
			const delay = 1000 * Math.pow(2, attempt - 1) + randomFloat() * 500;

			if (err instanceof Error) {
				log(
					`atanas.info: ⏳ [${name}] Retry ${attempt}/${maxRetries} in ${Math.round(delay)}ms (${err.message})`
				);
			} else {
				log(
					`atanas.info: ⏳ [${name}] Retry ${attempt}/${maxRetries} in ${Math.round(delay)}ms (Unknown error)`
				);
			}

			await new Promise(resolve => setTimeout(resolve, delay));
		}
	}

	log(`atanas.info: ❌ [${name}] Failed after ${maxRetries} retries`);

	return 0;
}

export const run = async (): Promise<NPMResult> => {
	const result: NPMResult = {};

	log('atanas.info: Fetching data from NPM. Please wait...');

	try {
		const data = [];

		for (const name of names) {
			const count = await fetchPackageDownloads(name);
			const delay = 1500 + randomFloat() * 500;

			data.push({ count, name });

			log(`atanas.info: ⏸ Waiting ${Math.round(delay)}ms before next package...`);

			await new Promise(resolve => setTimeout(resolve, delay));
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
