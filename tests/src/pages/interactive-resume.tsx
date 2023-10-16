import * as shared from '@scripts/shared';
import { partners } from '@test-config/mocks';
import { InteractiveResume } from '@pages/interactive-resume';
import { test, snapshotTest } from '@test-config/helpers';

snapshotTest(() => <InteractiveResume partners={partners} />, undefined, 'InteractiveResume');

it('Tests the Interactive resume page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const { asFragment } = await test(() => <InteractiveResume partners={partners} />);

	expect(asFragment()).toMatchSnapshot();
});
