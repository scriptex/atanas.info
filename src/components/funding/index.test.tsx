import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render, waitFor } from '@testing-library/react';

import { Funding } from '.';
import { FundingCrypto } from './crypto';

beforeEach(() => {
	window.prompt = jest.fn();
});

describe('Funding component', () => {
	it('Should render the Funding component', async () => {
		const { asFragment, rerender, container } = await waitFor(() => render(<Funding />));

		expect(asFragment()).toMatchSnapshot();

		act(() => {
			container.querySelector<HTMLElement>('.c-btn')?.click();
		});

		expect(asFragment()).toMatchSnapshot();

		act(() => {
			container.querySelector<HTMLElement>('.c-funding__backdrop')?.click();
		});

		expect(asFragment()).toMatchSnapshot();

		rerender(<FundingCrypto name="test" title="Test title" wallet="random-wallet-string" />);

		act(() => {
			container.querySelector<HTMLElement>('.c-funding__trigger')?.click();
		});

		expect(asFragment()).toMatchSnapshot();

		rerender(<FundingCrypto name="test" title="Test title" wallet="random-wallet-string" />);

		container.click();

		expect(asFragment()).toMatchSnapshot();
	});
});
