import { sync } from 'glob';

import { resolve } from 'path';
import { promises as fs, existsSync } from 'fs';

const readFiles = async (dirname: string, onSuccess: (filename: string) => unknown) => {
	const files = sync(`${dirname}/*.html`).filter(file => !file.includes('index.html'));

	for (const file of files) {
		await onSuccess(file);
	}
};

readFiles(resolve(__dirname, '..', 'dist'), async (filename: string) => {
	const folder = filename.replace('.html', '');

	if (!existsSync(folder)) {
		await fs.mkdir(folder);
	}

	await fs.rename(filename, `${folder}/index.html`);
});
