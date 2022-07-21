import * as React from 'react';
import { render } from '@testing-library/react';

import { About } from '.';
import { LastAbout } from './last-about';

describe('About component', () => {
	it('Should render the About component', () => {
		const { asFragment } = render(<About />);

		expect(asFragment()).toMatchSnapshot();
	});
});

describe('LastAbout component', () => {
	it('Should render the LastAbout component', () => {
		const { asFragment } = render(<LastAbout />);

		expect(asFragment()).toMatchSnapshot();
	});
});
