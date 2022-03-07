import * as React from 'react';
import { render, shallow } from 'enzyme';

import * as utils from '../../scripts/shared';
import { SectionSlides } from '.';

describe('SectionSlides component', () => {
	it('Should render the SectionSlides component', () => {
		const wrapper = shallow(<SectionSlides />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the SectionSlides component while prerendering', () => {
		Object.defineProperty(utils, 'isPrerendering', { value: true });

		const wrapper = render(<SectionSlides />);

		expect(wrapper).toMatchSnapshot();
	});
});
