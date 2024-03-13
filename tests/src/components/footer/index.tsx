import { Footer } from '@components';
import { snapshotTest } from '@test-config/helpers';
import { funding } from '@test-config/mocks';

snapshotTest(() => <Footer funding={funding} />, undefined, 'Footer');
