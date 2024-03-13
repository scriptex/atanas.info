import { Articles } from '@pages/articles';
import { snapshotTest } from '@test-config/helpers';
import { articles, funding, partners } from '@test-config/mocks';

snapshotTest(() => <Articles articles={articles} funding={funding} partners={partners} />, '.c-btn', 'Articles');
