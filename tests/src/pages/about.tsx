import { About } from '@pages/about';
import * as shared from '@scripts/shared';
import { test, snapshotTest } from '@test-config/helpers';

jest.mock('contentful', () => ({
	...jest.requireActual('contentful'),
	createClient: jest.fn(() => ({
		getEntries: jest.fn(() => Promise.resolve({ items: [] })),
		getContentTypes: jest.fn(() => Promise.resolve([]))
	}))
}));

snapshotTest(() => <About bio={[]} />);

snapshotTest(() => <About bio={[{ title: 'Title', content: 'Content' }]} />);

it('Tests the About page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const { asFragment } = await test(() => <About bio={[{ title: 'Title', content: 'Content' }]} />);

	expect(asFragment()).toMatchSnapshot();
});
