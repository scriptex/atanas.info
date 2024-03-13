import { LastFMInsights } from '@insights/utils';

export const lastFmInsights: LastFMInsights = {
	error: false,
	info: {
		user: {
			age: '39',
			album_count: '1000',
			artist_count: '1234',
			bootstrap: '',
			country: 'Bulgaria',
			gender: 'male',
			image: [],
			name: 'scriptex',
			playcount: '12345',
			playlists: '10',
			realname: 'Atanas',
			registered: {
				'#text': 123456789,
				unixtime: '123456789'
			},
			subscriber: '',
			track_count: '100',
			type: 'user',
			url: 'https://atanas.info'
		}
	},
	topAlbums: [
		{
			artist: 'Test Artist',
			images: [
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/34s/2b20f07b88e2de001eeb4ea110d6a061.png',
					size: 'small'
				},
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/64s/2b20f07b88e2de001eeb4ea110d6a061.png',
					size: 'medium'
				},
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/174s/2b20f07b88e2de001eeb4ea110d6a061.png',
					size: 'large'
				},
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2b20f07b88e2de001eeb4ea110d6a061.png',
					size: 'extralarge'
				}
			],
			name: 'Test top album'
		}
	],
	updated: 1675168164186,
	weeklyAlbumChart: [
		{
			artist: 'Test Artist',
			images: [
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/34s/ade81b221def43c48ba7b364058c13c2.png',
					size: 'small'
				},
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/64s/ade81b221def43c48ba7b364058c13c2.png',
					size: 'medium'
				},
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/174s/ade81b221def43c48ba7b364058c13c2.png',
					size: 'large'
				},
				{
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/ade81b221def43c48ba7b364058c13c2.png',
					size: 'extralarge'
				}
			],
			name: 'Test weekly album'
		}
	]
};
