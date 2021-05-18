import * as React from 'react';
import { shallow } from 'enzyme';

import { Funding } from '.';

describe('Funding component', () => {
	it('Should render the Funding component', () => {
		const wrapper = shallow(<Funding />);

		expect(wrapper).toMatchSnapshot();
	});
});
