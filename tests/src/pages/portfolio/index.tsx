import { partners } from '@test-config/mocks';
import { Portfolio } from '@pages/portfolio';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Portfolio partners={partners} />, undefined, 'Portfolio');
