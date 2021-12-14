#!/usr/bin/env ts-node-script

import { writeFile, readFile } from 'fs/promises';

const FILE = './static/sprite.svg';
const STYLE = 'visibility: hidden; ';

(async () => {
	const sprite = await readFile(FILE, 'utf8');
	const adjusted = sprite.replace(STYLE, '');

	await writeFile(FILE, adjusted, 'utf8');
})();
