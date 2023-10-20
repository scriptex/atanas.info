import { Occupation } from '@pages/occupation';
import { snapshotTest } from '@test-config/helpers';
import { funding, occupation, partners } from '@test-config/mocks';

snapshotTest(() => <Occupation data={occupation} funding={funding} partners={partners} />, undefined, 'Occupation');
