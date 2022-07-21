import * as React from 'react';
import { render } from '@testing-library/react';

import { Music } from '.';

Object.defineProperty(global.window.HTMLMediaElement.prototype, 'load', {
	configurable: true,
	get() {
		return () => undefined;
	}
});

describe('Music component', () => {
	it('Should render the Music component', () => {
		const { asFragment } = render(<Music />);

		expect(asFragment()).toMatchSnapshot();
	});
});
