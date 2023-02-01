import { log } from '@scripts/shared';
import { lastFm } from './client';
import { asyncForEach, saveInsights } from './utils';

type LastFMAlbum = {
	name: string;
	images: string;
	artist: string;
};

type LastFMInsights = {
	error: boolean;
	updated: number;
	topAlbums: LastFMAlbum[];
	weeklyAlbumChart: LastFMAlbum[];
};

export const getLastFMInsights = async (): Promise<LastFMInsights> => {
	log('atanas.info: Getting insights data from Last.FM...');

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

		const result = {
			error: false,
			updated: new Date().getTime(),
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
		};

		await saveInsights(result, 'LastFM');

		return result;
	} catch (e) {
		const result = {
			error: true,
			updated: new Date().getTime(),
			topAlbums: [],
			weeklyAlbumChart: []
		};

		await saveInsights(result, 'LastFM');

		return result;
	}
};
