import { Blog } from '@pages/blog';
import { snapshotTest } from '@test-config/helpers';
import { articles, funding, partners } from '@test-config/mocks';

snapshotTest(() => <Blog articles={articles} funding={funding} partners={partners} />, undefined, 'Blog');
