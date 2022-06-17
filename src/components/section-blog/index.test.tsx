import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as utils from '../../scripts/shared';
import { SectionBlog } from '.';

describe('SectionBlog component', () => {
	it('Should render the SectionBlog component', () => {
		const { asFragment, rerender } = render(
			<Router>
				<SectionBlog />
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();

		Object.defineProperty(utils, 'isPrerendering', { value: true });

		rerender(
			<Router>
				<SectionBlog />
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
