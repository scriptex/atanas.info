import { Slides } from '@pages/slides';
import { slides } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Slides data={slides} />, '.c-section__nav button', 'Slides');
