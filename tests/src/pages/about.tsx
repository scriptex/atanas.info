import { About } from '@pages/about';
import * as shared from '@scripts/shared';
import { test, snapshotTest } from '@test-config/helpers';

snapshotTest(About);

it('Tests the About page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const { asFragment } = await test(About);

	expect(asFragment()).toMatchSnapshot();
});
