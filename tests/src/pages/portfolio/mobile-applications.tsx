import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';
import { PortfolioMobileApps } from '@pages/portfolio/mobile-applications';

snapshotTest(() => <PortfolioMobileApps funding={funding} partners={partners} />, undefined, 'PortfolioMobileApps');
