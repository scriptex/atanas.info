import { Blog } from '@pages/blog';
import { snapshotTest } from '@test-config/helpers';
import { articles, funding, partners } from '@test-config/mocks';

snapshotTest(() => <Blog funding={funding} articles={articles} partners={partners} />, undefined, 'Blog');
