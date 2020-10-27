import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionTimeline } from '.';

describe('SectionTimeline component', () => {
	it('Should render the SectionTimeline component', () => {
		const wrapper = shallow(<SectionTimeline />);

		expect(wrapper).toMatchSnapshot();
	});
});
