import { writeFileSync } from 'fs';

import { lastFm } from './client';

export const getLastFMInsights = async (): Promise<void> => {
	const file = 'src/scripts/last.fm-insights.json';

	console.log('Getting insights data from Last.FM...');

	try {
		const weeklyAlbumChart = await lastFm.userGetWeeklyAlbumChart({
			user: 'scriptex'
		});

		const weeklyArtistChart = await lastFm.userGetWeeklyArtistChart({
			user: 'scriptex'
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
