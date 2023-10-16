import { Blog } from '@pages/blog';
import { snapshotTest } from '@test-config/helpers';
import { articles, partners } from '@test-config/mocks';

snapshotTest(() => <Blog articles={articles} partners={partners} />, undefined, 'Blog');
