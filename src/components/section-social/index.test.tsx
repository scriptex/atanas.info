import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionSocial } from '.';

describe('SectionSocial component', () => {
	it('Should render the SectionSocial component', () => {
		const wrapper = shallow(<SectionSocial />);

		expect(wrapper).toMatchSnapshot();
	});
});
