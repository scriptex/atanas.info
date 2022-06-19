import * as React from 'react';
import { render } from '@testing-library/react';

import { Head } from '.';

describe('Head component', () => {
	it('Should render the Head component', () => {
		const { asFragment } = render(<Head />);

		expect(asFragment()).toMatchSnapshot();
	});
});
