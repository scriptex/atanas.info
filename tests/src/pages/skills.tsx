import { Skills } from '@pages/skills';
import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(
	() => <Skills funding={funding} partners={partners} />,
	'.c-section__actions > .c-btn:last-child',
	'Skills'
);
