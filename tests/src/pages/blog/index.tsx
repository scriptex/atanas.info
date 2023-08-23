import { Blog } from '@pages/blog';
import { articles } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Blog articles={articles} />, undefined, 'Blog');
