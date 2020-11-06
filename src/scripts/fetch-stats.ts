#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import * as puppeteer from 'puppeteer';
import fetch, { Response, RequestInit } from 'node-fetch';

interface EndpointConfig {
	readonly url: string;
	readonly file: string;
	readonly init: RequestInit;
}

const ENDPOINTS: Record<string, EndpointConfig> = {
	npm: {
		url: 'https://api.npms.io/v2/search?q=maintainer:scriptex&size=100&from=0',
		init: {},
		file: './src/scripts/npm.json'
	},
	sourcerer: {
		url: 'https://sourcerer.io/scriptex',
		init: {},
		file: './src/scripts/sourcerer.json'
	},
	codersrank: {
		url: 'https://api.codersrank.io/app/candidate/GetScore',
		init: {
			headers: {
				'content-type': 'application/json'
			},
			body: '{"username":"scriptex"}',
			method: 'POST'
		},
		file: './src/scripts/codersrank.json'
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

	const element = await page.$('#__nuxt');

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
	const { npm, sourcerer, codersrank } = ENDPOINTS;
	const npmData = await getData(npm);
	const sourcererData = await getDataFromWebsite(sourcerer.url);
	const codersrankData = await getData(codersrank);

	writeFileSync(npm.file, JSON.stringify(npmData, null, 2));
	writeFileSync(sourcerer.file, JSON.stringify(sourcererData, null, 2));
	writeFileSync(codersrank.file, JSON.stringify(codersrankData, null, 2));
})();
