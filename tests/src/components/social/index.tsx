import { snapshotTest } from '@test-config/helpers';
import type { LastFMAlbum } from '@insights/utils';
import { SocialMusic, LinkedInBadge } from '@components';

const data = {
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
				},
				{
					size: 'mega',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/ade81b221def43c48ba7b364058c13c2.png'
				},
				{
					size: '',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/ade81b221def43c48ba7b364058c13c2.png'
				}
			],
			artist: 'Test Artist'
		}
	]
};

snapshotTest(LinkedInBadge);

snapshotTest(() => <SocialMusic data={data} />, undefined, 'SocialMusic');

snapshotTest(() => <SocialMusic data={{ ...data, topAlbums: [] }} />, undefined, 'SocialMusic');

snapshotTest(() => <SocialMusic data={{ ...data, error: true }} />, undefined, 'SocialMusic');

snapshotTest(() => <SocialMusic data={{ ...data, topAlbums: [{} as LastFMAlbum] }} />, undefined, 'SocialMusic');
