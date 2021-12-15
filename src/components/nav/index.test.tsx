import * as React from 'react';
import { render, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { Nav } from '.';

describe('Nav component', () => {
	it('Should render the Nav component', () => {
		const wrapper = shallow(<Nav />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the Nav component with props', () => {
		const wrapper = render(
			<Router>
				<Nav hasShell={true} className="c-nav--test" onClick={jest.fn()}>
					Test
				</Nav>
			</Router>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
