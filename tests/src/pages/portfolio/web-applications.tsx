import * as shared from '@scripts/shared';
import { snapshotTest } from '@test-config/helpers';
import { getStaticProps, PortfolioWebApps } from '@pages/portfolio/web-applications';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(() => (
	<PortfolioWebApps
		data={[
			{
				url: 'https://example.com',
				title: 'Test web app 1',
				description: 'This is just a testing web app',
				skip: false,
				image: '/images/test.png'
			},
			{
				url: '',
				title: 'Test web app 2',
				description: 'This is just a testing web app',
				skip: false,
				image: '/images/test.png'
			}
		]}
	/>
));

jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

snapshotTest(() => (
	<PortfolioWebApps
		data={[
			{
				url: 'https://example.com',
				title: 'Test web app 1',
				description: 'This is just a testing web app',
				skip: false,
				image: '/images/test.png'
			},
			{
				url: '',
				title: 'Test web app 2',
				description: 'This is just a testing web app',
				skip: false,
				image: '/images/test.png'
			}
		]}
	/>
));

jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

snapshotTest(() => <PortfolioWebApps data={[]} />);

snapshotTest(() => (
	// @ts-ignore
	<PortfolioWebApps />
));

it('Test the `getStaticProps` function', async () => {
	const result = await getStaticProps();

	expect(result).toBeDefined();
});