import { Articles } from '@pages/articles';
import { articles } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Articles articles={articles} />, '.c-btn', 'Articles');
