import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { PortfolioAutomotiveApps } from '@pages/portfolio/automotive-applications';

snapshotTest(() => <PortfolioAutomotiveApps partners={partners} />, undefined, 'PortfolioAutomotiveApps');
