import * as React from 'react';
import { render } from '@testing-library/react';

import { Lines } from '.';

describe('Lines component', () => {
	it('Should render the Lines component', () => {
		const { asFragment } = render(<Lines />);

		expect(asFragment()).toMatchSnapshot();
	});
});
