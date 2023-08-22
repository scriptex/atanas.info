import { act } from '@testing-library/react';

import { Home } from '@pages/index';
import { test, snapshotTest } from '@test-config/helpers';

jest.useFakeTimers();

const titles = ['Title 1', 'Title 2'];

snapshotTest(() => <Home titles={[]} />, undefined, 'Home');
snapshotTest(() => <Home titles={titles} />, undefined, 'Home');

it('Should test the Home page', async () => {
	const HomeComponent = () => <Home titles={titles} />;

	const { asFragment } = await test(HomeComponent);

	expect(asFragment()).toMatchSnapshot();

	await act(async () => {
		await jest.runOnlyPendingTimers();
	});

	expect(asFragment()).toMatchSnapshot();
});
