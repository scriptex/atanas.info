import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Nav } from '.';

describe('Nav component', () => {
	it('Should render the Nav component', () => {
		const { asFragment } = render(
			<Router>
				<Nav hasShell className="c-nav--test" onClick={jest.fn()}>
					Test
				</Nav>
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
