import * as shared from '@scripts/shared';
import { lastFmInsights } from '@test-config/mocks';
import { snapshotTest, test } from '@test-config/helpers';
import { Social, getStaticProps } from '@pages/social';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(() => <Social data={lastFmInsights} />, undefined, 'Social');

it('Tests the Social page when offline', async () => {
	jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

	const { asFragment } = await test(Social);

	expect(asFragment()).toMatchSnapshot();
});

it('Should test the `getStaticProps` function', async () => {
	const result = await getStaticProps({});

	expect(result).toEqual({ props: { data: [] } });
});
