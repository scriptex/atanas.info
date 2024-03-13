import { PortfolioAutomotiveApps } from '@pages/portfolio/automotive-applications';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(
	() => <PortfolioAutomotiveApps funding={funding} partners={partners} />,
	undefined,
	'PortfolioAutomotiveApps'
);
