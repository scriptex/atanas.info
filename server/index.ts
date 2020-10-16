#!/usr/bin/env ts-node-script

import * as puppeteer from 'puppeteer';

import { resolve } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { unlink, readFile, writeFile } = require('fs').promises;

(async () => {
	const temp = 'index-temp.html';
	const index = 'index.html';
	const dist = resolve(__dirname, '..', 'dist');

	try {
		const browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox']
		});

		const page = await browser.newPage();
		const tmp = await readFile(resolve(dist, index), {
			encoding: 'utf-8'
		});

		const content = tmp.replace(/\/src\./g, './src.');

		await writeFile(resolve(dist, temp), content);
		await page.goto('file:///' + resolve(dist, temp), {
			waitUntil: 'networkidle2'
		});

		const render = await page.content();
		const html = render.replace(/\.\/src\./g, '/src.');

		await unlink(resolve(dist, index));
		await writeFile(resolve(dist, index), html);
		await unlink(resolve(dist, temp));
	} catch (e) {
		console.error(e);
	}

	process.exit();
})();
