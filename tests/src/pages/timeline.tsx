import { Timeline } from '@pages/timeline';
import { snapshotTest } from '@test-config/helpers';
import { timelineItems } from '@test-config/mocks';

snapshotTest(() => <Timeline data={timelineItems} />, undefined, 'Timeline');
