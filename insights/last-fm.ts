import { writeFileSync } from 'node:fs';

import { lastFm } from './client';
import { asyncForEach } from './utils';

export const getLastFMInsights = async (): Promise<void> => {
	const file = 'src/data/last.fm-insights.json';

	console.log('Getting insights data from Last.FM...');

	try {
		const weeklyAlbumChart = await lastFm
			.userGetWeeklyAlbumChart({
				user: 'scriptex'
			})
			.then((r: any) => r.weeklyalbumchart.album.slice(0, 20));

		await asyncForEach(weeklyAlbumChart, async ({ name, artist }: any, index: number) => {
			weeklyAlbumChart[index].apiDetails = await lastFm.albumGetInfo({
				lang: 'en',
				album: name,
				artist: artist['#text'],
				username: 'scriptex',
				autocorrect: 1
			});
		});

		const topAlbums = await lastFm
			.userGetTopAlbums({
				user: 'scriptex',
				period: '1month'
			})
			.then((r: any) => r.topalbums.album.slice(0, 20));

		writeFileSync(
			file,
			JSON.stringify(
				{
					error: false,
					updated: new Date(),
					topAlbums: topAlbums.map((item: any) => ({
						name: item.name,
						images: item.image,
						artist: item.artist.name
					})),
					weeklyAlbumChart: weeklyAlbumChart.map((item: any) => ({
						name: item.name,
						images: item.apiDetails.album.image,
						artist: item.artist['#text']
					}))
				},
				null,
				2
			)
		);

		console.log(`Successfully wrote insights data from Last.FM in ${file}`);
	} catch (e) {
		writeFileSync(
			file,
			JSON.stringify(
				{
					error: true,
					updated: new Date(),
					topAlbums: [],
					weeklyAlbumChart: []
				},
				null,
				2
			)
		);

		console.log('Error getting data from Last.FM.', e);
	}
};
