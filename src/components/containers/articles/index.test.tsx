import * as React from 'react';
import { render, shallow } from 'enzyme';

import * as utils from '../../../scripts/shared';
import { SectionArticles } from '.';

describe('SectionArticles component', () => {
	it('Should render the SectionArticles component', () => {
		const wrapper = shallow(<SectionArticles />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the SectionArticles component while prerendering', () => {
		Object.defineProperty(utils, 'isPrerendering', { value: true });

		const wrapper = render(<SectionArticles />);

		expect(wrapper).toMatchSnapshot();
	});
});
