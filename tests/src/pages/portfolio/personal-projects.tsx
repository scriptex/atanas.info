import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { PortfolioPersonalProjects } from '@pages/portfolio/personal-projects';

snapshotTest(() => <PortfolioPersonalProjects partners={partners} />, undefined, 'PortfolioPersonalProjects');
