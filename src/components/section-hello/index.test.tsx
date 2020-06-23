import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionHello } from '.';

describe('SectionHello component', () => {
	it('Should render the SectionHello component', () => {
		const wrapper = shallow(<SectionHello />);

		expect(wrapper).toMatchSnapshot();
	});
});
