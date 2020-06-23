import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionSkills } from '.';

describe('SectionSkills component', () => {
	it('Should render the SectionSkills component', () => {
		const wrapper = shallow(<SectionSkills />);

		expect(wrapper).toMatchSnapshot();
	});
});
