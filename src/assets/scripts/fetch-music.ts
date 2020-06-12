#!/usr/bin/env ts-node-script

import { writeFileSync, unlinkSync, existsSync } from 'fs';
import * as pckg from '../../../package.json';

if (!pckg.tracks.length) {
	console.log('atanas.info: No tracks specified in package.json');
} else {
	const file = 'src/assets/scripts/tracks.ts';
	const data = pckg.tracks.map(track => {
		const url = track.url.replace('www', 'dl');

		return {
			url,
			metaData: {
				artist: track.artist,
				title: track.name
			}
		};
	});

	if (existsSync(file)) {
		unlinkSync(file);
	}

	writeFileSync(file, `export const tracks = ${JSON.stringify(data, null, 2)};`);

	console.log('atanas.info: Successfully saved tracks metadata in ' + file);
}
