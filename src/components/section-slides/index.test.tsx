/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { SectionSlides } from '.';

describe('SectionSlides component', () => {
	it('Should render the SectionSlides component', () => {
		act(() => {
			const wrapper = mount(<SectionSlides />);

			expect(wrapper).toMatchSnapshot();

			// @ts-ignore
			wrapper.find('button').at(0).props().onClick();

			expect(wrapper).toMatchSnapshot();
		});
	});
});
