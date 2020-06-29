/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { SectionVideos } from '.';

describe('SectionVideos component', () => {
	it('Should render the SectionVideos component', () => {
		act(() => {
			const wrapper = mount(<SectionVideos />);

			expect(wrapper).toMatchSnapshot();

			// @ts-ignore
			wrapper.find('button').at(0).props().onClick();

			expect(wrapper).toMatchSnapshot();
		});
	});
});
