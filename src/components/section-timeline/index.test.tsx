import * as React from 'react';
import { shallow } from 'enzyme';

import { WorkIcon, PersonalIcon, EducationIcon, SectionTimeline } from '.';

describe('SectionTimeline component', () => {
	[WorkIcon, PersonalIcon, EducationIcon, SectionTimeline].forEach(Component => {
		it(`Should render the ${Component.name} component`, () => {
			const wrapper = shallow(<Component />);

			expect(wrapper).toMatchSnapshot();
		});
	});
});
