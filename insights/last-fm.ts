import type {
	LastFMTopAlbumResponse,
	LastFMTopAlbumsResponse,
	LastFMWeeklyAlbumResponse,
	LastFMWeeklyAlbumChartResponse
} from 'lastfm-node-client';

import { log } from '@scripts/shared';
import { lastFm } from './client';
import { LastFMInsights, asyncForEach, saveInsights } from './utils';

const ITEMS_LIMIT = 20;

export const getLastFMInsights = async (): Promise<LastFMInsights> => {
	log('atanas.info: Getting insights data from Last.FM...');

	try {
		const info = await lastFm.userGetInfo({ user: 'scriptex' });

		const topAlbums = await lastFm
			.userGetTopAlbums({
				user: 'scriptex',
				period: '1month'
			})
			.then((r: LastFMTopAlbumsResponse) => r.topalbums.album.slice(0, ITEMS_LIMIT));

		const weeklyAlbumChart = await lastFm
			.userGetWeeklyAlbumChart({
				user: 'scriptex'
			})
			.then((r: LastFMWeeklyAlbumChartResponse) => r.weeklyalbumchart.album.slice(0, ITEMS_LIMIT));

		await asyncForEach(weeklyAlbumChart, async ({ name, artist }: LastFMWeeklyAlbumResponse, index: number) => {
			weeklyAlbumChart[index].apiDetails = await lastFm.albumGetInfo({
				lang: 'en',
				album: name,
				artist: artist['#text'],
				username: 'scriptex',
				autocorrect: 1
			});
		});

		const result: LastFMInsights = {
			info,
			error: false,
			updated: new Date().getTime(),
			topAlbums: topAlbums.map((item: LastFMTopAlbumResponse) => ({
				name: item.name,
				images: item.image,
				artist: item.artist.name
			})),
			weeklyAlbumChart: weeklyAlbumChart.map((item: LastFMWeeklyAlbumResponse) => ({
				name: item.name,
				images: item.apiDetails.album.image,
				artist: item.artist['#text']
			}))
		};

		await saveInsights(result, 'LastFM');

		return result;
	} catch (e) {
		const result: LastFMInsights = {
			info: null,
			error: true,
			updated: new Date().getTime(),
			topAlbums: [],
			weeklyAlbumChart: []
		};

		await saveInsights(result, 'LastFM');

		return result;
	}
};
