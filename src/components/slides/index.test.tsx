import * as React from 'react';
import { render } from '@testing-library/react';

import { Slides } from '.';

describe('Slides component', () => {
	it('Should render the Slides component', () => {
		const { asFragment } = render(<Slides />);

		expect(asFragment()).toMatchSnapshot();
	});
});
