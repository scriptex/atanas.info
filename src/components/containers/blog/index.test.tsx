import * as React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import * as utils from '~/src/scripts/shared';
import { SectionBlog } from '.';

describe('SectionBlog component', () => {
	it('Should render the SectionBlog component', () => {
		const wrapper = render(
			<Router>
				<SectionBlog />
			</Router>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the SectionBlog component while prerendering', () => {
		Object.defineProperty(utils, 'isPrerendering', { value: true });

		const wrapper = render(
			<Router>
				<SectionBlog />
			</Router>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
