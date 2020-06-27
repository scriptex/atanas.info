/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from '..';
import { SectionNav } from '.';

// codebeat:disable[ABC,LOC]
describe('SectionNav component', () => {
	it('Should render the SectionNav component', () => {
		const wrapper = shallow(
			<SectionNav
				name="title"
				data={[
					{
						url: 'https://google.com',
						title: 'Title 1',
						description: 'Description 1'
					},
					{
						url: 'https://google.com',
						title: 'Title 2',
						description: 'Description 2'
					}
				]}
				active={0}
				onClick={jest.fn()}
			/>
		);

		expect(wrapper).toMatchSnapshot();

		// @ts-ignore
		wrapper.find(Button).at(0).props().onClick();

		expect(wrapper).toMatchSnapshot();
	});
});
// codebeat:enable[ABC,LOC]
