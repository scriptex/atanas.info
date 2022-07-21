import * as React from 'react';
import { render } from '@testing-library/react';

import { Certificates } from '.';

describe('Certificates component', () => {
	it('Should render the Certificates component', () => {
		const { asFragment } = render(<Certificates />);

		expect(asFragment()).toMatchSnapshot();
	});
});
