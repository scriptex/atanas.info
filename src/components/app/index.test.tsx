import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render, RenderResult, waitFor } from '@testing-library/react';

import { App } from '.';
import * as shared from '../../scripts/shared';

jest.spyOn(shared, 'formatDate');

(shared.formatDate as jest.Mock).mockImplementation(() => 'Mock date');

describe('App component', () => {
	it('Should render the App component', async () => {
		let result!: RenderResult;

		await act(async () => {
			result = await waitFor(() => render(<App />));
		});

		expect(result.asFragment()).toMatchSnapshot();
	});
});
