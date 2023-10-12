import { partners } from '@test-config/mocks';
import { ErrorPage } from '@pages/404';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <ErrorPage partners={partners} />, undefined, 'ErrorPage');
