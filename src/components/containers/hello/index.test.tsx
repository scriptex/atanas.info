import * as React from 'react';
import { mount, shallow } from 'enzyme';

import { mockUseEffect } from '../../../scripts/shared';
import { Slider, SectionHello } from '.';

describe('Slider component', () => {
	it('Should render the Slider component', () => {
		const wrapper = shallow(<Slider />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should handle lifecycle methods', () => {
		const wrapper = mount(<Slider />);

		expect(wrapper).toMatchSnapshot();

		wrapper.unmount();

		expect(wrapper).toMatchSnapshot();
	});
});

describe('SectionHello component', () => {
	mockUseEffect();

	it('Should render the SectionHello component', () => {
		const wrapper = shallow(<SectionHello />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should handle lifecycle methods', () => {
		const wrapper = mount(<SectionHello />);

		expect(wrapper).toMatchSnapshot();

		wrapper.unmount();

		expect(wrapper).toMatchSnapshot();
	});
});
