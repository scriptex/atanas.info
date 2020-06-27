import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionMusic } from '.';

describe('SectionMusic component', () => {
	it('Should render the SectionMusic component', () => {
		const wrapper = shallow(<SectionMusic />);

		expect(wrapper).toMatchSnapshot();
	});
});
