import { About } from '@pages/about';

import * as shared from '@scripts/shared';

import { snapshotTest, test } from '@test-config/helpers';
import { funding, resumeOwner as owner, partners } from '@test-config/mocks';

snapshotTest(() => <About bio={[]} funding={funding} owner={owner} partners={partners} />, undefined, 'About');
snapshotTest(
	() => <About bio={[{ content: 'Content', title: 'Title' }]} funding={funding} owner={owner} partners={partners} />,
	undefined,
	'About'
);

it('Tests the About page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const AboutComponent = () => (
		<About bio={[{ content: 'Content', title: 'Title' }]} funding={funding} owner={owner} partners={partners} />
	);

	const { asFragment } = await test(AboutComponent);

	expect(asFragment()).toMatchSnapshot();
});
