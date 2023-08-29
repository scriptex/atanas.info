import { Certificates } from '@pages/certificates';
import { certificates } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Certificates data={certificates} />, undefined, 'Certificates');
