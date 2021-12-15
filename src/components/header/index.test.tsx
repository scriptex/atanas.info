import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '.';

describe('Header component', () => {
	it('Should render the Header component', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should handle state changes', () => {
		const wrapper = mount(
			<Router>
				<Header />
			</Router>
		);

		wrapper.find('.c-nav__toggle').simulate('click');
	});
});
