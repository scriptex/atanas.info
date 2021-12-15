import * as React from 'react';
import { mount, shallow } from 'enzyme';

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
		const wrapper = shallow(<ScrollToTop />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should run the effects', () => {
		const wrapper = mount(<ScrollToTop />);

		expect(wrapper).toMatchSnapshot();
	});
});
