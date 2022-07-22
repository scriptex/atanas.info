import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Blog } from '.';
import * as utils from '../../scripts/shared';

describe('Blog component', () => {
	it('Should render the Blog component', () => {
		const { asFragment, rerender } = render(
			<Router>
				<Blog />
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();

		Object.defineProperty(utils, 'isPrerendering', { value: true });

		rerender(
			<Router>
				<Blog />
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
