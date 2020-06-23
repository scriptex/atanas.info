import * as React from 'react';
import { shallow } from 'enzyme';

import { Slider, SectionHello } from '.';

describe('Slider component', () => {
	it('Should render the Slider component', () => {
		const wrapper = shallow(<Slider />);

		expect(wrapper).toMatchSnapshot();
	});
});

describe('SectionHello component', () => {
	let useEffect: any;

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce((f: () => any) => f());
	};

	beforeEach(() => {
		useEffect = jest.spyOn(React, 'useEffect');

		mockUseEffect();
	});

	it('Should render the SectionHello component', () => {
		const wrapper = shallow(<SectionHello />);

		expect(wrapper).toMatchSnapshot();
	});
});
