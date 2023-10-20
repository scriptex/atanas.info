import { Slides } from '@pages/slides';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners, slides } from '@test-config/mocks';

snapshotTest(() => <Slides data={slides} funding={funding} partners={partners} />, '.c-section__nav button', 'Slides');
