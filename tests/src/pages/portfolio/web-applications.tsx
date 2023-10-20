import * as shared from '@scripts/shared';
import { snapshotTest } from '@test-config/helpers';
import { PortfolioWebApps } from '@pages/portfolio/web-applications';
import { funding, partners } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(
	() => (
		<PortfolioWebApps
			data={[
				{
					url: 'https://example.com',
					title: 'Test web app 1',
					description: 'This is just a testing web app',
					skip: false,
					image: '/images/test.png',
					index: 0
				},
				{
					url: '',
					title: 'Test web app 2',
					description: 'This is just a testing web app',
					skip: false,
					image: '/images/test.png',
					index: 1
				}
			]}
			funding={funding}
			partners={partners}
		/>
	),
	undefined,
	'PortfolioWebApps'
);

jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

snapshotTest(
	() => (
		<PortfolioWebApps
			data={[
				{
					url: 'https://example.com',
					title: 'Test web app 1',
					description: 'This is just a testing web app',
					skip: false,
					image: '/images/test.png',
					index: 0
				},
				{
					url: '',
					title: 'Test web app 2',
					description: 'This is just a testing web app',
					skip: false,
					image: '/images/test.png',
					index: 1
				}
			]}
			funding={funding}
			partners={partners}
		/>
	),
	undefined,
	'PortfolioWebApps'
);

jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

snapshotTest(() => <PortfolioWebApps data={[]} funding={funding} partners={partners} />, undefined, 'PortfolioWebApps');

// @ts-ignore
snapshotTest(() => <PortfolioWebApps funding={funding} partners={partners} />, undefined, 'PortfolioWebApps');
