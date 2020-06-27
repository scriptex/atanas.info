/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionSlides } from '.';

describe('SectionSlides component', () => {
	it('Should render the SectionSlides component', () => {
		const wrapper = shallow(<SectionSlides />);

		expect(wrapper).toMatchSnapshot();
	});
});
