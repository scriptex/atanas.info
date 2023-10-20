import { OfflinePage } from '@pages/_offline';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(() => <OfflinePage funding={funding} partners={partners} />, undefined, 'OfflinePage');
