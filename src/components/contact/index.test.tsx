import 'isomorphic-fetch';
import { act } from 'react-dom/test-utils';
import * as React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Contact } from '.';
import { snapshotTest } from '../test-helpers';

jest.mock('../../scripts/shared.ts', () => ({
	...jest.requireActual('../../scripts/shared.ts'),
	useScript: jest.fn(),
	waitForElement: () => Promise.resolve(null)
}));

afterAll(() => {
	jest.resetAllMocks();
});

snapshotTest(Contact, '.c-btn');
snapshotTest(Contact, '.c-contact__close');

const fetchMock = (value: Record<string, unknown>, verb: 'resolve' | 'reject' = 'resolve') => {
	jest.spyOn(window, 'fetch').mockReturnValueOnce(
		verb === 'resolve'
			? Promise.resolve(new Response(JSON.stringify(value)))
			: Promise.reject(new Response(JSON.stringify(value)))
	);
};

describe('Contact form submit', () => {
	it('Successfully submits the form', async () => {
		const { container, asFragment } = render(<Contact />);

		const form = container.querySelector('form');

		fetchMock({});

		await act(async () => {
			await waitFor(() => form?.submit());
		});

		expect(asFragment()).toMatchSnapshot();

		fetchMock({ error: 'Mocked error' });

		await act(async () => {
			await waitFor(() => form?.submit());
		});

		expect(asFragment()).toMatchSnapshot();

		fetchMock({ error: 'Mocked error' }, 'reject');

		await act(async () => {
			await waitFor(() => form?.submit());
		});

		expect(asFragment()).toMatchSnapshot();
	});
});
