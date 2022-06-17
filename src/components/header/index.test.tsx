import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '.';

describe('Header component', () => {
	it('Should render the Header component', () => {
		const { asFragment, container } = render(
			<Router>
				<Header />
			</Router>
		);

		expect(asFragment()).toMatchSnapshot();

		act(() => {
			container.querySelector<HTMLElement>('.c-nav__toggle')?.click();
		});

		expect(asFragment()).toMatchSnapshot();
	});
});
