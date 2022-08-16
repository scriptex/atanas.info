import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Blog } from '.';

describe('Blog component', () => {
	it('Should render the Blog component', () => {
		const { asFragment } = render(
			<Router>
				<Blog />
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
