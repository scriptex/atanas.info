import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionVideos } from '.';

describe('SectionVideos component', () => {
	it('Should render the SectionVideos component', () => {
		const wrapper = shallow(<SectionVideos />);

		expect(wrapper).toMatchSnapshot();
	});
});
