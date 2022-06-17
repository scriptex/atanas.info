import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorPage } from '.';

describe('ErrorPage component', () => {
	it('Should render the ErrorPage component', () => {
		const { asFragment } = render(
			<Router>
				<ErrorPage />
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
