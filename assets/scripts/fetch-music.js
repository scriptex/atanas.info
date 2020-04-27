const { writeFileSync, unlinkSync, existsSync } = require('fs');

const { tracks } = require('../../package.json');

if (!tracks.length) {
	console.log('atanas.info: No tracks specified in package.json');
} else {
	const file = `assets/scripts/tracks.js`;
	const data = tracks.map(track => {
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

	writeFileSync(file, `export default ${JSON.stringify(data, null, 2)};`);

	console.log('atanas.info: Successfully saved tracks metadata in ' + file);
}
