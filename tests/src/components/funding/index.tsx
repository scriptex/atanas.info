import { act } from 'react';

import { fireEvent, waitFor } from '@testing-library/react';

import { Funding } from '@components';
import { snapshotTest, test } from '@test-config/helpers';
import { funding } from '@test-config/mocks';

snapshotTest(() => <Funding data={funding} />, undefined, 'Gunding');

it('Should test the Funding lifecycle', async () => {
	const FundingComponent = () => <Funding data={funding} />;

	const { asFragment, container } = await test(FundingComponent);

	expect(asFragment()).toMatchSnapshot();

	const testOnClick = async (selector: string) => {
		await waitFor(() => {
			fireEvent.click(container.querySelector(selector)!);
		});

		expect(asFragment()).toMatchSnapshot();
	};

	await testOnClick('.c-btn--small');

	await testOnClick('.c-funding__backdrop');

	await testOnClick('.c-btn--small');

	await testOnClick('.c-funding__trigger');

	await testOnClick('.c-btn--small');

	window.prompt = jest.fn();

	jest.useFakeTimers();

	await waitFor(() => {
		fireEvent.click(container.querySelector('.c-funding__crypto')!);
	});

	await act(async () => jest.runOnlyPendingTimers());

	expect(asFragment()).toMatchSnapshot();

	(window.prompt as jest.Mock).mockClear();
});
