import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionAbout, LastAbout } from '.';

describe('SectionAbout component', () => {
	it('Should render the SectionAbout component', () => {
		const wrapper = shallow(<SectionAbout />);

		expect(wrapper).toMatchSnapshot();
	});
});

describe('LastAbout component', () => {
	it('Should render the LastAbout component', () => {
		const wrapper = shallow(<LastAbout />);

		expect(wrapper).toMatchSnapshot();
	});
});
