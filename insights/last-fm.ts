import type {
	LastFMTopAlbumResponse,
	LastFMTopAlbumsResponse,
	LastFMWeeklyAlbumChartResponse,
	LastFMWeeklyAlbumResponse
} from 'lastfm-node-client';

import { log } from '@scripts/shared';

import { lastFm } from './client';
import { asyncForEach, LastFMInsights, saveInsights } from './utils';

const ITEMS_LIMIT = 20;

export const getLastFMInsights = async (): Promise<LastFMInsights> => {
	log('atanas.info: Getting insights data from Last.FM...');

	try {
		const info = await lastFm.userGetInfo({ user: 'scriptex' });

		const topAlbums = await lastFm
			.userGetTopAlbums({
				period: '1month',
				user: 'scriptex'
			})
			.then((r: LastFMTopAlbumsResponse) => r.topalbums.album.slice(0, ITEMS_LIMIT));

		const weeklyAlbumChart = await lastFm
			.userGetWeeklyAlbumChart({
				user: 'scriptex'
			})
			.then((r: LastFMWeeklyAlbumChartResponse) => r.weeklyalbumchart.album.slice(0, ITEMS_LIMIT));

		await asyncForEach(weeklyAlbumChart, async ({ artist, name }: LastFMWeeklyAlbumResponse, index: number) => {
			weeklyAlbumChart[index].apiDetails = await lastFm.albumGetInfo({
				album: name,
				artist: artist['#text'],
				autocorrect: 1,
				lang: 'en',
				username: 'scriptex'
			});
		});

		const result: LastFMInsights = {
			error: false,
			info,
			topAlbums: topAlbums.map((item: LastFMTopAlbumResponse) => ({
				artist: item.artist.name,
				images: item.image,
				name: item.name
			})),
			updated: new Date().getTime(),
			weeklyAlbumChart: weeklyAlbumChart.map((item: LastFMWeeklyAlbumResponse) => ({
				artist: item.artist['#text'],
				images: item.apiDetails.album.image,
				name: item.name
			}))
		};

		await saveInsights(result, 'LastFM');

		return result;
	} catch (e) {
		const result: LastFMInsights = {
			error: true,
			info: null,
			topAlbums: [],
			updated: new Date().getTime(),
			weeklyAlbumChart: []
		};

		await saveInsights(result, 'LastFM');

		return result;
	}
};
