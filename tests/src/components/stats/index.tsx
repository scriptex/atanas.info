import { StatsError, StatsEntry } from '@components';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <StatsError network="Github" />);

snapshotTest(() => <StatsEntry data={[{ title: 'Test title', value: 'Test value' }]} title="Test title" />);