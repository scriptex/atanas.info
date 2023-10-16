import { Certificates } from '@pages/certificates';
import { snapshotTest } from '@test-config/helpers';
import { certificates, partners } from '@test-config/mocks';

snapshotTest(() => <Certificates data={certificates} partners={partners} />, undefined, 'Certificates');
