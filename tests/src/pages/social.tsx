import * as shared from '@scripts/shared';
import { Social } from '@pages/social';
import { snapshotTest, test } from '@test-config/helpers';
import { lastFmInsights, partners } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(() => <Social data={lastFmInsights} partners={partners} />, undefined, 'Social');

it('Tests the Social page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const { asFragment } = await test(Social);

	expect(asFragment()).toMatchSnapshot();
});
