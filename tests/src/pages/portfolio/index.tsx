import { Portfolio } from '@pages/portfolio';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(() => <Portfolio funding={funding} partners={partners} />, undefined, 'Portfolio');
