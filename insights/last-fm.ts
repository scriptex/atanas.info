import { writeFileSync } from 'fs';

import { lastFm } from './client';
import { asyncForEach } from './utils';

// codebeat:disable[ABC,LOC]
export const getLastFMInsights = async (): Promise<void> => {
	const file = 'src/scripts/last.fm-insights.json';
	const defaultArguments: Record<string, string | number> = {
		autocorrect: 1,
		lang: 'en',
		username: 'scriptex'
	};

	console.log('Getting insights data from Last.FM...');

	try {
		const weeklyAlbumChart = await lastFm
			.userGetWeeklyAlbumChart({
				user: 'scriptex'
			})
			.then((r: any) => r.weeklyalbumchart.album.slice(0, 20));

		await asyncForEach(weeklyAlbumChart, async ({ name, artist }: any, index: number) => {
			weeklyAlbumChart[index].apiDetails = await lastFm.albumGetInfo({
				artist: artist['#text'],
				album: name,
				...defaultArguments
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
					weeklyAlbumChart: weeklyAlbumChart.map((item: any) => ({
						name: item.name,
						images: item.apiDetails.album.image,
						artist: item.artist['#text']
					})),
					topAlbums: topAlbums.map((item: any) => ({
						name: item.name,
						images: item.image,
						artist: item.artist.name
					})),
					updated: new Date()
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
					error: true
				},
				null,
				2
			)
		);

		console.log('Error getting data from Last.FM.', e);
	}
};
// codebeat:enable[ABC,LOC]
