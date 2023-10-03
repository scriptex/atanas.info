import { LastFMInsights } from '@insights/utils';

export const lastFmInsights: LastFMInsights = {
	info: {
		user: {
			name: 'scriptex',
			age: '39',
			subscriber: '',
			realname: 'Atanas',
			bootstrap: '',
			playcount: '12345',
			artist_count: '1234',
			playlists: '10',
			track_count: '100',
			album_count: '1000',
			image: [],
			registered: {
				unixtime: '123456789',
				'#text': 123456789
			},
			country: 'Bulgaria',
			gender: 'male',
			url: 'https://atanas.info',
			type: 'user'
		}
	},
	error: false,
	updated: 1675168164186,
	topAlbums: [
		{
			name: 'Test top album',
			images: [
				{
					size: 'small',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/34s/2b20f07b88e2de001eeb4ea110d6a061.png'
				},
				{
					size: 'medium',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/64s/2b20f07b88e2de001eeb4ea110d6a061.png'
				},
				{
					size: 'large',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/174s/2b20f07b88e2de001eeb4ea110d6a061.png'
				},
				{
					size: 'extralarge',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2b20f07b88e2de001eeb4ea110d6a061.png'
				}
			],
			artist: 'Test Artist'
		}
	],
	weeklyAlbumChart: [
		{
			name: 'Test weekly album',
			images: [
				{
					size: 'small',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/34s/ade81b221def43c48ba7b364058c13c2.png'
				},
				{
					size: 'medium',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/64s/ade81b221def43c48ba7b364058c13c2.png'
				},
				{
					size: 'large',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/174s/ade81b221def43c48ba7b364058c13c2.png'
				},
				{
					size: 'extralarge',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/ade81b221def43c48ba7b364058c13c2.png'
				}
			],
			artist: 'Test Artist'
		}
	]
};
