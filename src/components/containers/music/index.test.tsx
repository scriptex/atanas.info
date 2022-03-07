import * as React from 'react';
import { mount, render } from 'enzyme';

import { SectionMusic } from '.';

Object.defineProperty(global.window.HTMLMediaElement.prototype, 'load', {
	configurable: true,
	get() {
		return () => undefined;
	}
});

describe('SectionMusic component', () => {
	it('Should render the SectionMusic component', () => {
		const wrapper = render(<SectionMusic />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should mount the SectionMusic component', () => {
		const wrapper = mount(<SectionMusic />);

		expect(wrapper).toMatchSnapshot();
	});
});
