import * as React from 'react';
import { render } from '@testing-library/react';

import { ScrollToTop } from '.';

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

describe('ScrollToTop component', () => {
	it('Should render the ScrollToTop component', () => {
		const { asFragment } = render(<ScrollToTop />);

		expect(asFragment()).toMatchSnapshot();
	});
});
