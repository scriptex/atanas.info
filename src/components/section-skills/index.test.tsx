import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionSkills } from '.';

describe('SectionSkills component', () => {
	let useEffect: any;

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce((f: () => any) => f());
	};

	beforeEach(() => {
		useEffect = jest.spyOn(React, 'useEffect');

		mockUseEffect();
	});

	it('Should render the SectionSkills component', () => {
		const wrapper = shallow(<SectionSkills />);

		expect(wrapper).toMatchSnapshot();
	});
});
