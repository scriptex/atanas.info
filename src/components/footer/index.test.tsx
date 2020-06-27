import * as React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '.';

describe('Footer component', () => {
	it('Should render the Footer component', () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper).toMatchSnapshot();
	});
});
