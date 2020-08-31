import * as React from 'react';
import { shallow } from 'enzyme';

import { Contact } from '.';

describe('Contact component', () => {
	it('Should render the Contact component', () => {
		const wrapper = shallow(<Contact />);

		expect(wrapper).toMatchSnapshot();
	});
});
