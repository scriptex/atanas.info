#!/usr/bin/env ts-node-script

import { Track, music as tracks } from '@data/music';
import clientPromise, { queryMusic } from '@lib/mongodb';
import { log } from '@scripts/shared';

(async () => {
	const data = tracks.map((track: Track) => {
		const url = track.url.replace('www', 'dl');

		return {
			metaData: {
				artist: track.artist,
				title: track.name
			},
			url
		};
	});

	const client = await clientPromise;
	const db = client.db('All');
	const collection = db.collection('Music');

	await collection.updateOne(queryMusic, { $set: { ...queryMusic, data } }, { upsert: true });

	log('atanas.info: Successfully saved tracks metadata in MongoDB.');

	process.exit();
})();
