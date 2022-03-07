import * as React from 'react';
import { mount, render } from 'enzyme';

import { SectionResume } from '.';

beforeEach(() => {
	window.print = jest.fn();
});

describe('SectionResume component', () => {
	it('Should render the SectionResume component', () => {
		const wrapper = render(<SectionResume />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should mount the SectionResume component', () => {
		const wrapper = mount(<SectionResume />);

		wrapper.find('.c-btn').forEach(button => {
			button.simulate('click');

			expect(wrapper).toMatchSnapshot();
		});
	});
});
