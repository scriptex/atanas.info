import { Timeline } from '.';
import { snapshotTest } from '../test-helpers';

beforeEach(() => {
	const mockIntersectionObserver = jest.fn();

	mockIntersectionObserver.mockReturnValue({
		observe: jest.fn().mockReturnValue(null),
		unobserve: jest.fn().mockReturnValue(null),
		disconnect: jest.fn().mockReturnValue(null)
	});

	window.IntersectionObserver = mockIntersectionObserver;
});

snapshotTest(Timeline);
