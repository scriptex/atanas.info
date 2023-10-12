import { Skills } from '@pages/skills';
import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Skills partners={partners} />, '.c-section__actions > .c-btn:last-child', 'Skills');
