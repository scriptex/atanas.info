import { Social } from '.';
import { snapshotTest } from '../test-helpers';

jest.mock('../../data/last.fm-insights.json', () => ({
	default: {
		error: false,
		updated: '2022-08-08T07:24:59.343Z',
		topAlbums: [
			{
				name: 'Decksandrumsandrockandroll 20th anniversary',
				images: [
					{
						size: 'small',
						'#text': 'https://lastfm.freetls.fastly.net/i/u/34s/8ddf62e36c4609d08d0d98567d36224f.jpg'
					},
					{
						size: 'medium',
						'#text': 'https://lastfm.freetls.fastly.net/i/u/64s/8ddf62e36c4609d08d0d98567d36224f.jpg'
					},
					{
						size: 'large',
						'#text': 'https://lastfm.freetls.fastly.net/i/u/174s/8ddf62e36c4609d08d0d98567d36224f.jpg'
					},
					{
						size: 'extralarge',
						'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/8ddf62e36c4609d08d0d98567d36224f.jpg'
					}
				],
				artist: 'Propellerheads'
			}
		],
		weeklyAlbumChart: [
			{
				name: 'Work Of Art',
				images: [
					{
						size: 'small',
						'#text': ''
					},
					{
						size: 'medium',
						'#text': ''
					},
					{
						size: 'large',
						'#text': ''
					},
					{
						size: 'extralarge',
						'#text': ''
					},
					{
						size: 'mega',
						'#text': ''
					},
					{
						size: '',
						'#text': ''
					}
				],
				artist: 'Svetlin Kuslev'
			}
		]
	}
}));

afterAll(() => {
	jest.resetAllMocks();
});

snapshotTest(Social);
