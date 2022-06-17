import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render, RenderResult, waitFor } from '@testing-library/react';

import { App } from '.';

describe('App component', () => {
	it('Should render the App component', async () => {
		let result: RenderResult;

		await act(async () => {
			result = await waitFor(() => render(<App />));
		});

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		expect(result.asFragment()).toMatchSnapshot();
	});
});
