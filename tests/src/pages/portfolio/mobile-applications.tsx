import { PortfolioMobileApps } from '@pages/portfolio/mobile-applications';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(() => <PortfolioMobileApps funding={funding} partners={partners} />, undefined, 'PortfolioMobileApps');
