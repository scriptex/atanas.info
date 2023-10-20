import { Stats } from '@pages/stats';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(() => <Stats funding={funding} partners={partners} />, undefined, 'Stats');
