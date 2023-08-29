import { About } from '@pages/about';
import * as shared from '@scripts/shared';
import { test, snapshotTest } from '@test-config/helpers';
import { resumeOwner as owner } from '@test-config/mocks';

snapshotTest(() => <About bio={[]} owner={owner} />, undefined, 'About');
snapshotTest(() => <About bio={[{ title: 'Title', content: 'Content' }]} owner={owner} />, undefined, 'About');

it('Tests the About page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const AboutComponent = () => <About bio={[{ title: 'Title', content: 'Content' }]} owner={owner} />;

	const { asFragment } = await test(AboutComponent);

	expect(asFragment()).toMatchSnapshot();
});
