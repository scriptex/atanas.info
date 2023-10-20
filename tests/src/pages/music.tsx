import { Music } from '@pages/music';
import { funding, partners } from '@test-config/mocks';
import { snapshotTest, mockAudioContext } from '@test-config/helpers';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

beforeEach(() => {
	// @ts-ignore
	window.AudioContext = mockAudioContext();
});

const data = [
	{
		url: 'https://dl.dropbox.com/s/fh1igvfnzzucnmh/Scriptex_-_01_-_La_Playa%28Invader__2004%29.mp3?dl=0',
		metaData: { artist: 'Scriptex', title: 'La Playa' }
	},
	{
		url: 'https://dl.dropbox.com/s/p8o4hpat99va06b/Scriptex_-_02_-_Clash%28Invader__2004%29.mp3?dl=0',
		metaData: { artist: 'Scriptex', title: 'Clash' }
	}
];

snapshotTest(() => <Music data={data} funding={funding} partners={partners} />, '.c-music__menu', 'Music');

snapshotTest(() => <Music data={data} funding={funding} partners={partners} />, '.c-music__btn--play', 'Music');

snapshotTest(() => <Music data={data} funding={funding} partners={partners} />, '.c-music__btn--pause', 'Music');

snapshotTest(
	() => <Music data={data} funding={funding} partners={partners} />,
	'.c-music__tracks button:first-child',
	'Music'
);
