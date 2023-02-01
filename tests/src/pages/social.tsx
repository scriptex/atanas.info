import { Social } from '@pages/social';
import * as shared from '@scripts/shared';
import { snapshotTest, test } from '@test-config/helpers';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

const lastFMData = {
	error: false,
	updated: 1675244020717,
	topAlbums: [
		{
			name: 'Chillhop Essentials Winter 2022',
			images: [
				{
					size: 'small',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/34s/a81e499c7e83f8f5b9350b5d597fbafe.jpg'
				},
				{
					size: 'medium',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/64s/a81e499c7e83f8f5b9350b5d597fbafe.jpg'
				},
				{
					size: 'large',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/174s/a81e499c7e83f8f5b9350b5d597fbafe.jpg'
				},
				{
					size: 'extralarge',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/a81e499c7e83f8f5b9350b5d597fbafe.jpg'
				}
			],
			artist: 'ChillHop Music'
		}
	],
	weeklyAlbumChart: [
		{
			name: 'chillhop beat tapes: El Train',
			images: [
				{
					size: 'small',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/34s/3924084c27953af323253adffa658150.jpg'
				},
				{
					size: 'medium',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/64s/3924084c27953af323253adffa658150.jpg'
				},
				{
					size: 'large',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/174s/3924084c27953af323253adffa658150.jpg'
				},
				{
					size: 'extralarge',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/3924084c27953af323253adffa658150.jpg'
				},
				{
					size: 'mega',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/3924084c27953af323253adffa658150.jpg'
				},
				{
					size: '',
					'#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/3924084c27953af323253adffa658150.jpg'
				}
			],
			artist: 'El Train'
		}
	]
};

snapshotTest(() => <Social data={lastFMData} />);

it('Tests the Social page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const { asFragment } = await test(Social);

	expect(asFragment()).toMatchSnapshot();
});
