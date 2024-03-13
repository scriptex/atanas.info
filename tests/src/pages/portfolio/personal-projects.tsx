import { PortfolioPersonalProjects } from '@pages/portfolio/personal-projects';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(
	() => <PortfolioPersonalProjects funding={funding} partners={partners} />,
	undefined,
	'PortfolioPersonalProjects'
);
