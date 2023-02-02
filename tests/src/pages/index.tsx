import { act } from '@testing-library/react';

import { Home } from '@pages/index';
import { test, snapshotTest } from '@test-config/helpers';

jest.useFakeTimers();

snapshotTest(Home);

it('Should test the Home page', async () => {
	const { asFragment } = await test(Home);

	expect(asFragment()).toMatchSnapshot();

	await act(async () => {
		await jest.runOnlyPendingTimers();
	});

	expect(asFragment()).toMatchSnapshot();
});
