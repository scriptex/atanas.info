import { Occupation } from '@pages/occupation';
import { snapshotTest } from '@test-config/helpers';
import { occupation, partners } from '@test-config/mocks';

snapshotTest(() => <Occupation data={occupation} partners={partners} />, undefined, 'Occupation');
