import { Music } from '@pages/music';

import { mockAudioContext, snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

beforeEach(() => {
	window.AudioContext = mockAudioContext();
});

const data = [
	{
		metaData: { artist: 'Scriptex', title: 'La Playa' },
		url: 'https://dl.dropbox.com/s/fh1igvfnzzucnmh/Scriptex_-_01_-_La_Playa%28Invader__2004%29.mp3?dl=0'
	},
	{
		metaData: { artist: 'Scriptex', title: 'Clash' },
		url: 'https://dl.dropbox.com/s/p8o4hpat99va06b/Scriptex_-_02_-_Clash%28Invader__2004%29.mp3?dl=0'
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
