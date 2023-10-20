import * as shared from '@scripts/shared';
import { funding, partners } from '@test-config/mocks';
import { InteractiveResume } from '@pages/interactive-resume';
import { test, snapshotTest } from '@test-config/helpers';

snapshotTest(() => <InteractiveResume funding={funding} partners={partners} />, undefined, 'InteractiveResume');

it('Tests the Interactive resume page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const InteractiveResumeComponent = () => <InteractiveResume funding={funding} partners={partners} />;

	const { asFragment } = await test(InteractiveResumeComponent);

	expect(asFragment()).toMatchSnapshot();
});
