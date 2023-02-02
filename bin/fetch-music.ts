#!/usr/bin/env ts-node-script

import { log } from '@scripts/shared';
import { Track, music as tracks } from '@data/music';
import clientPromise, { queryMusic } from '@lib/mongodb';

(async () => {
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

	const client = await clientPromise;
	const db = client.db('All');
	const collection = db.collection('Music');

	await collection.updateOne(queryMusic, { $set: { ...queryMusic, data } }, { upsert: true });

	log('atanas.info: Successfully saved tracks metadata in MongoDB.');

	process.exit();
})();
