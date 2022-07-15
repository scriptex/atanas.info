import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionMusic } from '.';

Object.defineProperty(global.window.HTMLMediaElement.prototype, 'load', {
	configurable: true,
	get() {
		return () => undefined;
	}
});

describe('SectionMusic component', () => {
	it('Should render the SectionMusic component', () => {
		const { asFragment } = render(<SectionMusic />);

		expect(asFragment()).toMatchSnapshot();
	});
});
