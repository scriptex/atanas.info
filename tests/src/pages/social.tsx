import { Social } from '@pages/social';
import * as shared from '@scripts/shared';
import { mockFetch, snapshotTest, test } from '@test-config/helpers';
import { funding, lastFmInsights, partners, recentTracks } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

mockFetch(() => recentTracks);

snapshotTest(() => <Social data={lastFmInsights} funding={funding} partners={partners} />, undefined, 'Social');

it('Tests the Social page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const SocialComponent = () => <Social data={lastFmInsights} funding={funding} partners={partners} />;

	const { asFragment } = await test(SocialComponent);

	expect(asFragment()).toMatchSnapshot();
});
