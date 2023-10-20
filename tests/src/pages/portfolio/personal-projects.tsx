import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';
import { PortfolioPersonalProjects } from '@pages/portfolio/personal-projects';

snapshotTest(
	() => <PortfolioPersonalProjects funding={funding} partners={partners} />,
	undefined,
	'PortfolioPersonalProjects'
);
