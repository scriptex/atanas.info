import * as globby from 'globby';

import { resolve } from 'path';
import { promises as fs } from 'fs';

const readFiles = async (dirname: string, onSuccess: (filename: string, content: string) => unknown) => {
	const files = await globby(`${dirname}/**/*.html`);

	for (const file of files) {
		const content = await fs.readFile(resolve(dirname, file));

		await onSuccess(file, content.toString());
	}
};

readFiles(resolve(__dirname, '..', 'dist'), async (filename: string, content: string) => {
	await fs.writeFile(filename, content.replace(/http:\/\/localhost:45678\//gim, '/'));
});
