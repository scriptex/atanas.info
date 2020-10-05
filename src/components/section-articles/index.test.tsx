import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionArticles } from '.';

describe('SectionArticles component', () => {
	it('Should render the SectionArticles component', () => {
		const wrapper = shallow(<SectionArticles />);

		expect(wrapper).toMatchSnapshot();
	});
});
