import { StatsEntry, StatsError } from '@components';

import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <StatsError network="Github" />, undefined, 'StatsError');

snapshotTest(
	() => <StatsEntry data={[{ index: 0, title: 'Test title', value: 'Test value' }]} title="Test title" />,
	undefined,
	'StatsEntry'
);
