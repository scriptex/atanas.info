import * as React from 'react';
import { shallow } from 'enzyme';

import { Nav } from '.';

describe('Nav component', () => {
	it('Should render the Nav component', () => {
		const wrapper = shallow(<Nav />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the Nav component with props', () => {
		const wrapper = shallow(
			<Nav hasShell={true} className="c-nav--test" onClick={jest.fn()}>
				Test
			</Nav>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
