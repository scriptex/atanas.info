import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionStats } from '.';

describe('SectionStats component', () => {
	it('Should render the SectionStats component', () => {
		const wrapper = shallow(<SectionStats />);

		expect(wrapper).toMatchSnapshot();
	});
});
