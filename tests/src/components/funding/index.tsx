import { act, waitFor, fireEvent } from '@testing-library/react';

import { Funding } from '@components';
import { test, snapshotTest } from '@test-config/helpers';

snapshotTest(Funding);

it('Should test the Funding lifecycle', async () => {
	const { asFragment, container, getByTestId } = await test(Funding);

	expect(asFragment()).toMatchSnapshot();

	const testOnClick = async (element: Element | Node | Document | Window) => {
		await waitFor(() => {
			fireEvent.click(element);
		});

		expect(asFragment()).toMatchSnapshot();
	};

	await testOnClick(getByTestId('funding-toggle'));

	await testOnClick(getByTestId('funding-backdrop'));

	await testOnClick(getByTestId('funding-toggle'));

	await testOnClick(getByTestId('funding-trigger'));

	await testOnClick(getByTestId('funding-toggle'));

	window.prompt = jest.fn();

	jest.useFakeTimers();

	await waitFor(() => {
		fireEvent.click(container.querySelector('.c-funding__crypto')!);
	});

	act(() => {
		jest.runOnlyPendingTimers();
	});

	expect(asFragment()).toMatchSnapshot();

	(window.prompt as jest.Mock).mockClear();
});
