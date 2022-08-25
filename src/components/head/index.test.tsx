import { Head } from '.';
import { snapshotTest } from '../test-helpers';

jest.mock('../../data/meta', () => ({
	...jest.requireActual('../../data/meta'),
	metaTags: [
		{
			name: 'mock',
			content: 'Mocked meta'
		}
	],
	linkTags: [
		{
			rel: 'stylesheet',
			href: 'mock.css'
		}
	]
}));

afterAll(() => {
	jest.resetAllMocks();
});

snapshotTest(Head);
