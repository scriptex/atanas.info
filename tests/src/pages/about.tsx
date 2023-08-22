import { About } from '@pages/about';
import * as shared from '@scripts/shared';
import { test, snapshotTest } from '@test-config/helpers';

snapshotTest(() => <About bio={[]} />, undefined, 'About');
snapshotTest(() => <About bio={[{ title: 'Title', content: 'Content' }]} />, undefined, 'About');

it('Tests the About page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const AboutComponent = () => <About bio={[{ title: 'Title', content: 'Content' }]} />;

	const { asFragment } = await test(AboutComponent);

	expect(asFragment()).toMatchSnapshot();
});
