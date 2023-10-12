import { partners } from '@test-config/mocks';
import { Occupation } from '@pages/occupation';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Occupation partners={partners} />, undefined, 'Occupation');
