import * as React from 'react';
import { shallow } from 'enzyme';

import { Header } from '.';

describe('Header component', () => {
	it('Should render the Header component', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper).toMatchSnapshot();
	});
});
