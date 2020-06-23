import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionAbout } from '.';

describe('SectionAbout component', () => {
	it('Should render the SectionAbout component', () => {
		const wrapper = shallow(<SectionAbout />);

		expect(wrapper).toMatchSnapshot();
	});
});
