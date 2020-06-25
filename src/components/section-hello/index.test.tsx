import * as React from 'react';
import { shallow } from 'enzyme';

import { mockUseEffect } from '../../assets/shared';
import { Slider, SectionHello } from '.';

describe('Slider component', () => {
	it('Should render the Slider component', () => {
		const wrapper = shallow(<Slider />);

		expect(wrapper).toMatchSnapshot();
	});
});

describe('SectionHello component', () => {
	mockUseEffect();

	it('Should render the SectionHello component', () => {
		const wrapper = shallow(<SectionHello />);

		expect(wrapper).toMatchSnapshot();
	});
});
