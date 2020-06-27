import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionPortfolio } from '.';

jest.mock('../../assets/scripts/projects-list.json', () => ({
	default: [
		{
			url: 'https://www.google.com',
			image: 'image 1',
			title: 'Project 1',
			description: 'Description 1'
		},
		{
			url: '',
			image: 'image 2',
			title: 'Project 2',
			description: 'Description 2'
		}
	]
}));

describe('SectionPortfolio component', () => {
	it('Should render the SectionPortfolio component', () => {
		const wrapper = shallow(<SectionPortfolio />);

		expect(wrapper).toMatchSnapshot();
	});
});
