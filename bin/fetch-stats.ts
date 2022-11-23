#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import * as puppeteer from 'puppeteer';

interface EndpointConfig {
	readonly url: string;
	readonly file: string;
	readonly init: RequestInit;
}

interface VueDecoratedElement extends Element {
	__vue__: any;
}

const ENDPOINTS: Record<string, EndpointConfig> = {
	npm: {
		url: 'https://api.npms.io/v2/search?q=maintainer:scriptex&size=100&from=0',
		init: {},
		file: './src/data/npm.json'
	},
	sourcerer: {
		url: 'https://sourcerer.io/scriptex',
		init: {},
		file: './src/data/sourcerer.json'
	},
	codersrankWorkExperience: {
		url: 'https://api.codersrank.io/app/candidate/GetScore',
		init: {
			headers: {
				'content-type': 'application/json'
			},
			body: '{"username":"scriptex"}',
			method: 'POST'
		},
		file: './src/data/codersrank-work-experience.json'
	},
	codersrankChartWidget: {
		url: 'https://grpcgateway.codersrank.io/candidate/scriptex/GetScoreProgress',
		init: {
			headers: {
				'Content-Type': 'application/json'
			}
		},
		file: './src/data/codersrank-chart-widget.json'
	},
	codersrankActivityWidget: {
		url: 'https://grpcgateway.codersrank.io/candidate/activity/scriptex',
		init: {
			headers: {
				'Content-Type': 'application/json'
			}
		},
		file: './src/data/codersrank-activity-widget.json'
	}
};

const getData = async (endpoint: EndpointConfig, method = 'json'): Promise<any> => {
	return await fetch(endpoint.url, endpoint.init).then((r: Response) => (method === 'json' ? r.json() : r.text()));
};

const getDataFromWebsite = async (url: EndpointConfig['url']): Promise<Record<string, any>> => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox']
	});

	const page = await browser.newPage();

	await page.goto(url, { waitUntil: 'networkidle2' });
	await page.waitForTimeout(5000);

	const element = (await page.$('#__nuxt')) as unknown as VueDecoratedElement;

	let result = {};

	if (element) {
		try {
			result = await page.evaluate(element => element.__vue__.$store.state, element);
		} catch (e) {
			console.error('Element or property not found.');
		}
	}

	await browser.close();

	return result;
};

(async () => {
	const { npm, sourcerer, codersrankChartWidget, codersrankActivityWidget, codersrankWorkExperience } = ENDPOINTS;

	const npmData = await getData(npm);
	const sourcererData = await getDataFromWebsite(sourcerer.url);
	const codersrankChartWidgetData = await getData(codersrankChartWidget);
	const codersrankActivityWidgetData = await getData(codersrankActivityWidget);
	const codersrankWorkExperienceData = await getData(codersrankWorkExperience);

	writeFileSync(npm.file, JSON.stringify(npmData, null, 2));
	writeFileSync(sourcerer.file, JSON.stringify(sourcererData, null, 2));
	writeFileSync(codersrankChartWidget.file, JSON.stringify(codersrankChartWidgetData, null, 2));
	writeFileSync(codersrankActivityWidget.file, JSON.stringify(codersrankActivityWidgetData, null, 2));
	writeFileSync(codersrankWorkExperience.file, JSON.stringify(codersrankWorkExperienceData, null, 2));
})();
