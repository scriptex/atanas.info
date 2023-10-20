import { act } from '@testing-library/react';

import { Home } from '@pages/index';
import { funding, partners } from '@test-config/mocks';
import { test, snapshotTest } from '@test-config/helpers';

jest.useFakeTimers();

const titles = ['Title 1', 'Title 2'];

snapshotTest(() => <Home titles={[]} funding={funding} partners={partners} />, undefined, 'Home');
snapshotTest(() => <Home titles={titles} funding={funding} partners={partners} />, undefined, 'Home');

it('Should test the Home page', async () => {
	const HomeComponent = () => <Home titles={titles} funding={funding} partners={partners} />;

	const { asFragment } = await test(HomeComponent);

	expect(asFragment()).toMatchSnapshot();

	await act(async () => {
		await jest.runOnlyPendingTimers(); //NOSONAR
	});

	expect(asFragment()).toMatchSnapshot();
});
