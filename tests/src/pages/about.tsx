import { About } from '@pages/about';
import * as shared from '@scripts/shared';
import { test, snapshotTest } from '@test-config/helpers';
import { funding, resumeOwner as owner, partners } from '@test-config/mocks';

snapshotTest(() => <About bio={[]} owner={owner} funding={funding} partners={partners} />, undefined, 'About');
snapshotTest(
	() => <About bio={[{ title: 'Title', content: 'Content' }]} owner={owner} funding={funding} partners={partners} />,
	undefined,
	'About'
);

it('Tests the About page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const AboutComponent = () => (
		<About bio={[{ title: 'Title', content: 'Content' }]} owner={owner} funding={funding} partners={partners} />
	);

	const { asFragment } = await test(AboutComponent);

	expect(asFragment()).toMatchSnapshot();
});
