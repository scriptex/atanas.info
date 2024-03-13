import { PortfolioOpenSourceProjects } from '@pages/portfolio/open-source';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(
	() => <PortfolioOpenSourceProjects funding={funding} partners={partners} />,
	undefined,
	'PortfolioOpenSourceProjects'
);
