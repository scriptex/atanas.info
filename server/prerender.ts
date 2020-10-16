import { resolve } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { unlink, readFile, writeFile } = require('fs').promises;

import * as puppeteer from 'puppeteer';

(async () => {
	try {
		const dist = resolve(__dirname, '..', 'dist');
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		const content = await readFile(resolve(dist, 'index.html'), { encoding: 'utf-8' });
		const html = content.replace(/\/src\./g, './src.');

		await writeFile(resolve(dist, 'index-temp.html'), html);
		await page.goto('file:///' + resolve(dist, 'index-temp.html'), { waitUntil: 'networkidle2' });

		const renderedContent = await page.content();
		const updatedContent = renderedContent.replace(/\.\/src\./g, '/src.');

		await unlink(resolve(dist, 'index.html'));
		await writeFile(resolve(dist, 'index.html'), updatedContent);
		await unlink(resolve(dist, 'index-temp.html'));
	} catch (e) {
		console.error(e);
	}

	process.exit();
})();
