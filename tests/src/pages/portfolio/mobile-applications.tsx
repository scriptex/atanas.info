import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { PortfolioMobileApps } from '@pages/portfolio/mobile-applications';

snapshotTest(() => <PortfolioMobileApps partners={partners} />, undefined, 'PortfolioMobileApps');
