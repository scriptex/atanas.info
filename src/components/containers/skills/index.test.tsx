import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionSkills } from '.';
import { mockUseEffect } from '../../../scripts/shared';

describe('SectionSkills component', () => {
	mockUseEffect();

	it('Should render the SectionSkills component', () => {
		const wrapper = shallow(<SectionSkills />);

		expect(wrapper).toMatchSnapshot();
	});
});
