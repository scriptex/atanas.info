import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';
import { PortfolioOpenSourceProjects } from '@pages/portfolio/open-source';

snapshotTest(
	() => <PortfolioOpenSourceProjects funding={funding} partners={partners} />,
	undefined,
	'PortfolioOpenSourceProjects'
);
