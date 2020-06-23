/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from '..';
import { SectionVideos } from '.';

describe('SectionVideos component', () => {
	it('Should render the SectionVideos component', () => {
		const wrapper = shallow(<SectionVideos />);

		expect(wrapper).toMatchSnapshot();

		// @ts-ignore
		wrapper.find(Button).at(0).props().onClick();

		expect(wrapper).toMatchSnapshot();
	});
});
