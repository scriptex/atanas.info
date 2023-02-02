import { Stats } from '@pages/stats';
import { snapshotTest } from '@test-config/helpers';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(Stats);
