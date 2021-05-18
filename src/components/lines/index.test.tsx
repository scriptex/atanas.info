import * as React from 'react';
import { shallow } from 'enzyme';

import { Lines } from '.';

describe('Lines component', () => {
	it('Should render the Lines component', () => {
		const wrapper = shallow(<Lines />);

		expect(wrapper).toMatchSnapshot();
	});
});
