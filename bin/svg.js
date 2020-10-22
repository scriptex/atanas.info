#!/usr/bin/env node

// @ts-nocheck

const { readFileSync } = require('fs');
const { resolve, relative } = require('path');
const { readdir, readFile, writeFile } = require('fs').promises;

const SVGO = require('svgo');
const yaml = require('js-yaml');

const folder = resolve(__dirname, '..', 'static', 'images', 'svg');

// prettier-ignore
const getAttr = (svg, attr) => parseFloat(svg.attr(attr).value.replace(/px$/, ''));

const addViewBox = svg => {
	// prettier-ignore
	if (svg.isElem(['svg']) && !svg.hasAttr('viewBox') && svg.hasAttr('width') && svg.hasAttr('height')) {
        const width = getAttr(svg, 'width');
        const height = getAttr(svg, 'height');

        svg.addAttr({
            name: 'viewBox',
            local: 'viewBox',
            value: '0 0 ' + width + ' ' + height,
            prefix: '',
        });
    }

	return svg;
};

let counter = 0;

const { plugins } = yaml.safeLoad(readFileSync(resolve(__dirname, '..', 'svgo.yml')));

const svgo = new SVGO({
	plugins: [
		...plugins.map(plugin => ({
			[plugin]: true
		})),
		{
			cleanupIDs: {
				prefix: {
					toString: () => `id-${counter++}`
				}
			}
		},
		{
			custom: {
				type: 'perItem',
				active: true,
				// prettier-ignore
				description: 'Plugin which adds viewBox based on width and height',
				params: {},
				fn: addViewBox
			}
		}
	]
});

async function getFiles(dir = folder) {
	const dirents = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		dirents.map(dirent => {
			const res = resolve(dir, dirent.name);
			return dirent.isDirectory() ? getFiles(res) : res;
		})
	);

	return [].concat(...files);
}

(async () => {
	const files = await getFiles();
	const paths = files.filter(file => file.endsWith('.svg'));

	for (const path of paths) {
		const data = await readFile(path, 'utf-8');
		const result = await svgo.optimize(data, { path });

		await writeFile(result.path, result.data);
	}
})();
