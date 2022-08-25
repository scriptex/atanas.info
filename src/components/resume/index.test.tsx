import { Resume } from '.';
import { snapshotTest } from '..';

beforeEach(() => {
	window.print = jest.fn();
});

snapshotTest(Resume, '.c-btn');
