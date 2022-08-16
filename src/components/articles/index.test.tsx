import * as React from 'react';
import { render } from '@testing-library/react';

import { Articles } from '.';

describe('Articles component', () => {
	it('Should render the Articles component', () => {
		const { asFragment } = render(<Articles />);

		expect(asFragment()).toMatchSnapshot();
	});
});
