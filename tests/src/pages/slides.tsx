import { Slides } from '@pages/slides';
import { snapshotTest } from '@test-config/helpers';
import { partners, slides } from '@test-config/mocks';

snapshotTest(() => <Slides data={slides} partners={partners} />, '.c-section__nav button', 'Slides');
