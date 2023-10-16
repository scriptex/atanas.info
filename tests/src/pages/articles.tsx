import { Articles } from '@pages/articles';
import { snapshotTest } from '@test-config/helpers';
import { articles, partners } from '@test-config/mocks';

snapshotTest(() => <Articles articles={articles} partners={partners} />, '.c-btn', 'Articles');
