import { Resume } from '@pages/resume';
import { snapshotTest } from '@test-config/helpers';

window.print = jest.fn();

snapshotTest(Resume, '.c-btn--print');

(window.print as jest.Mock).mockClear();
