import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';
import { PortfolioAutomotiveApps } from '@pages/portfolio/automotive-applications';

snapshotTest(
	() => <PortfolioAutomotiveApps funding={funding} partners={partners} />,
	undefined,
	'PortfolioAutomotiveApps'
);
