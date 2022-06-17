import * as React from 'react';
import { render } from '@testing-library/react';

import { Loader } from '.';

describe('Loader component', () => {
	it('Should render the Loader component', () => {
		const { asFragment } = render(<Loader />);

		expect(asFragment()).toMatchSnapshot();
	});
});
