import * as shared from '@scripts/shared';
import { InteractiveResume } from '@pages/interactive-resume';
import { test, snapshotTest } from '@test-config/helpers';

snapshotTest(InteractiveResume);

it('Tests the Interactive resume page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const { asFragment } = await test(InteractiveResume);

	expect(asFragment()).toMatchSnapshot();
});
