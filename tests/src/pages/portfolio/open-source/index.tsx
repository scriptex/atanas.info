import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { PortfolioOpenSourceProjects } from '@pages/portfolio/open-source';

snapshotTest(() => <PortfolioOpenSourceProjects partners={partners} />, undefined, 'PortfolioOpenSourceProjects');
