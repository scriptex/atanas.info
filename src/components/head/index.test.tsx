import * as React from 'react';
import { shallow } from 'enzyme';

import { Head } from '.';

describe('Head component', () => {
	it('Should render the Head component', () => {
		const wrapper = shallow(<Head />);

		expect(wrapper).toMatchSnapshot();
	});
});
