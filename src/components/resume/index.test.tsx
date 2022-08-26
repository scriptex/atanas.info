import { Resume } from '.';
import { snapshotTest } from '../test-helpers';

beforeEach(() => {
	window.print = jest.fn();
});

snapshotTest(Resume, '.c-btn');
