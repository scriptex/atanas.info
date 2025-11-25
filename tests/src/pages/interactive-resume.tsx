import { InteractiveResume } from '@pages/interactive-resume';

import * as shared from '@scripts/shared';

import { snapshotTest, test } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(() => <InteractiveResume funding={funding} partners={partners} />, undefined, 'InteractiveResume');

it('Tests the Interactive resume page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const InteractiveResumeComponent = () => <InteractiveResume funding={funding} partners={partners} />;

	const { asFragment } = await test(InteractiveResumeComponent);

	expect(asFragment()).toMatchSnapshot();
});
