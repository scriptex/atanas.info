import { ErrorPage } from '@pages/404';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(() => <ErrorPage funding={funding} partners={partners} />, undefined, 'ErrorPage');
