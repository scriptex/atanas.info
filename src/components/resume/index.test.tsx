import { Resume } from '.';
import { snapshotTestWithButtons } from '..';

beforeEach(() => {
	window.print = jest.fn();
});

snapshotTestWithButtons(Resume, '.c-btn');
