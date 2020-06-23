import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionPortfolio } from '.';

jest.mock('../../assets/scripts/projects-list.json', () => ({
	default: []
}));

describe('SectionPortfolio component', () => {
	it('Should render the SectionPortfolio component', () => {
		const wrapper = shallow(<SectionPortfolio />);

		expect(wrapper).toMatchSnapshot();
	});
});
