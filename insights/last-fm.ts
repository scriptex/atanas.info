import { writeFileSync } from 'fs';

import { lastFm } from './client';
import { asyncForEach } from './utils';

export const getLastFMInsights = async (): Promise<void> => {
	const file = 'src/scripts/last.fm-insights.json';
	const defaultArguments: Record<string, string | number> = {
		autocorrect: 1,
		lang: 'en',
		username: 'scriptex'
	};

	console.log('Getting insights data from Last.FM...');

	try {
		const weeklyAlbumChart = await lastFm.userGetWeeklyAlbumChart({
			user: 'scriptex'
		});

		await asyncForEach(weeklyAlbumChart.weeklyalbumchart.album, async ({ name, artist }: any, index: number) => {
			weeklyAlbumChart.weeklyalbumchart.album[index].apiDetails = await lastFm.albumGetInfo({
				artist: artist['#text'],
				album: name,
				...defaultArguments
			});
		});

		const weeklyArtistChart = await lastFm.userGetWeeklyArtistChart({
			user: 'scriptex'
		});

		await asyncForEach(weeklyArtistChart.weeklyartistchart.artist, async ({ name }: any, index: number) => {
			weeklyArtistChart.weeklyartistchart.artist[index].apiDetails = await lastFm.artistGetInfo({
				artist: name,
				...defaultArguments
			});
		});

		const weeklyTrackChart = await lastFm.userGetWeeklyTrackChart({
			user: 'scriptex'
		});

		writeFileSync(
			file,
			JSON.stringify(
				{
					weeklyAlbumChart,
					weeklyArtistChart,
					weeklyTrackChart,
					updated: new Date()
				},
				null,
				2
			)
		);

		console.log(`Successfully wrote insights data from Last.FM in ${file}`);
	} catch (e) {
		console.log('Error getting data from Last.FM.', e);
	}
};
