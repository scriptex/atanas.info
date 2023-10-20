import { Timeline } from '@pages/timeline';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners, timelineItems } from '@test-config/mocks';

snapshotTest(() => <Timeline data={timelineItems} funding={funding} partners={partners} />, undefined, 'Timeline');
