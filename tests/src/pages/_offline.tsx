import { partners } from '@test-config/mocks';
import { OfflinePage } from '@pages/_offline';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <OfflinePage partners={partners} />, undefined, 'OfflinePage');
