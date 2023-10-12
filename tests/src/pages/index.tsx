import { act } from '@testing-library/react';

import { Home } from '@pages/index';
import { partners } from '@test-config/mocks';
import { test, snapshotTest } from '@test-config/helpers';

jest.useFakeTimers();

const titles = ['Title 1', 'Title 2'];

snapshotTest(() => <Home titles={[]} partners={partners} />, undefined, 'Home');
snapshotTest(() => <Home titles={titles} partners={partners} />, undefined, 'Home');

it('Should test the Home page', async () => {
	const HomeComponent = () => <Home titles={titles} partners={partners} />;

	const { asFragment } = await test(HomeComponent);

	expect(asFragment()).toMatchSnapshot();

	await act(async () => {
		await jest.runOnlyPendingTimers();
	});

	expect(asFragment()).toMatchSnapshot();
});
