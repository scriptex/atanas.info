import { Videos } from '@pages/videos';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners, videos } from '@test-config/mocks';

snapshotTest(() => <Videos data={videos} funding={funding} partners={partners} />, '.c-section__nav button', 'Videos');
