import { Footer } from '@components';
import { funding } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Footer funding={funding} />, undefined, 'Footer');
