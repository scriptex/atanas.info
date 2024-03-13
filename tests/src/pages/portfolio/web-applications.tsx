import { PortfolioWebApps } from '@pages/portfolio/web-applications';

import * as shared from '@scripts/shared';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(
	() => (
		<PortfolioWebApps
			data={[
				{
					description: 'This is just a testing web app',
					image: '/images/test.png',
					index: 0,
					skip: false,
					title: 'Test web app 1',
					url: 'https://example.com'
				},
				{
					description: 'This is just a testing web app',
					image: '/images/test.png',
					index: 1,
					skip: false,
					title: 'Test web app 2',
					url: ''
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
					description: 'This is just a testing web app',
					image: '/images/test.png',
					index: 0,
					skip: false,
					title: 'Test web app 1',
					url: 'https://example.com'
				},
				{
					description: 'This is just a testing web app',
					image: '/images/test.png',
					index: 1,
					skip: false,
					title: 'Test web app 2',
					url: ''
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
