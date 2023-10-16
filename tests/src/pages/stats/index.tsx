import { Stats } from '@pages/stats';
import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

snapshotTest(() => <Stats partners={partners} />, undefined, 'Stats');
