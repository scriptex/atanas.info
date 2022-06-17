import * as React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Contact } from '.';

describe('Contact component', () => {
	it('Should render the Contact component', async () => {
		const { asFragment } = await waitFor(() => render(<Contact />));

		expect(asFragment()).toMatchSnapshot();
	});
});
