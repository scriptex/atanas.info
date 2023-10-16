import * as shared from '@scripts/shared';
import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { PortfolioWebApps } from '@pages/portfolio/web-applications';

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
			partners={partners}
		/>
	),
	undefined,
	'PortfolioWebApps'
);

jest.spyOn(shared, 'useNetworkState').mockImplementation(() => false);

snapshotTest(() => <PortfolioWebApps data={[]} partners={partners} />, undefined, 'PortfolioWebApps');

snapshotTest(
	() => (
		// @ts-ignore
		<PortfolioWebApps partners={partners} />
	),
	undefined,
	'PortfolioWebApps'
);
