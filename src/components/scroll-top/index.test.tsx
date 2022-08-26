import { ScrollToTop } from '.';
import { snapshotTest } from '../test-helpers';

jest.mock('react-router-dom', () => ({
	useLocation: jest.fn().mockReturnValue({
		pathname: '/another-route',
		search: '',
		hash: '',
		state: null,
		key: '5nvxpbdafa'
	})
}));

beforeEach(() => {
	window.scrollTo = jest.fn();
});

afterAll(() => {
	jest.resetAllMocks();
});

snapshotTest(ScrollToTop);
