import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionAbout, LastAbout } from '.';

describe('SectionAbout component', () => {
	it('Should render the SectionAbout component', () => {
		const { asFragment } = render(<SectionAbout />);

		expect(asFragment()).toMatchSnapshot();
	});
});

describe('LastAbout component', () => {
	it('Should render the LastAbout component', () => {
		const { asFragment } = render(<LastAbout />);

		expect(asFragment()).toMatchSnapshot();
	});
});
