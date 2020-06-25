/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { Header } from '.';

describe('Header component', () => {
	it('Should render the Header component', () => {
		const wrapper = mount(<Header />);

		expect(wrapper).toMatchSnapshot();

		// codebeat:disable[ABC]
		act(() => {
			// @ts-ignore
			wrapper.find('.c-nav a').at(0).props().onClick();

			expect(wrapper).toMatchSnapshot();

			// @ts-ignore
			wrapper.find('button').at(0).props().onClick();

			expect(wrapper).toMatchSnapshot();
		});
		// codebeat:enable[ABC]
	});
});
