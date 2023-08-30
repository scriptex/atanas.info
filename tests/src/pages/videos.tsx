import { Videos } from '@pages/videos';
import { videos } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Videos data={videos} />, '.c-section__nav button', 'Videos');
