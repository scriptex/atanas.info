import { Videos } from '@pages/videos';
import { snapshotTest } from '@test-config/helpers';
import { partners, videos } from '@test-config/mocks';

snapshotTest(() => <Videos data={videos} partners={partners} />, '.c-section__nav button', 'Videos');
