import { Articles } from '@pages/articles';
import { snapshotTest } from '@test-config/helpers';
import { articles, funding, partners } from '@test-config/mocks';

snapshotTest(() => <Articles funding={funding} articles={articles} partners={partners} />, '.c-btn', 'Articles');
