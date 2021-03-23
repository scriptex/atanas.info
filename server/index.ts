#!/usr/bin/env ts-node-script

import * as puppeteer from 'puppeteer';

import { resolve } from 'path';
import { promises as fs } from 'fs';

import { Routes } from '../src/scripts/routes';

const { unlink, readFile, writeFile, mkdir } = fs;

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
		const content = await readFile(resolve(dist, index), {
			encoding: 'utf-8'
		});

		// const content = tmp.replace(/\/src\./g, './src.');

		await writeFile(resolve(dist, temp), content);
		await page.goto('http://localhost:1234', {
			waitUntil: 'networkidle2'
		});

		const render = await page.content();
		const html = render.replace(/\.\/src\./g, '/src.');

		const routes = Object.values(Routes).filter((route: string) => route !== '/');

		await unlink(resolve(dist, index));
		await writeFile(resolve(dist, index), html);
		await unlink(resolve(dist, temp));

		for (const route of routes) {
			await page.$eval(`.c-nav a[href="${route}"]`, (el: any) => el.click());

			const html = await page.content();
			const dir = route.replace('/', '');

			await mkdir(resolve(__dirname, '..', 'dist', dir));
			await writeFile(resolve(__dirname, '..', 'dist', dir, 'index.html'), html);
		}
	} catch (e) {
		console.error(e);
	}

	process.exit();
})();
