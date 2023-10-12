import { Timeline } from '@pages/timeline';
import { snapshotTest } from '@test-config/helpers';
import { partners, timelineItems } from '@test-config/mocks';

snapshotTest(() => <Timeline data={timelineItems} partners={partners} />, undefined, 'Timeline');
