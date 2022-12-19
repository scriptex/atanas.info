#!/usr/bin/env ts-node-script

import { writeFileSync, unlinkSync, existsSync } from 'node:fs';

import { Track, music as tracks } from '@data/music';

if (!tracks.length) {
	console.log('atanas.info: No tracks specified.');
} else {
	const file = 'src/data/tracks.ts';
	const data = tracks.map((track: Track) => {
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
