import * as React from 'react';
import { render } from '@testing-library/react';

import { Videos } from '.';

describe('Videos component', () => {
	it('Should render the Videos component', () => {
		const { asFragment } = render(<Videos />);

		expect(asFragment()).toMatchSnapshot();
	});
});
