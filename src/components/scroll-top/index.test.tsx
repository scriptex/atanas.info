import * as React from 'react';
import { shallow } from 'enzyme';

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

describe('ScrollToTop component', () => {
	it('Should render the ScrollToTop component', () => {
		const wrapper = shallow(<ScrollToTop />);

		expect(wrapper).toMatchSnapshot();
	});
});
