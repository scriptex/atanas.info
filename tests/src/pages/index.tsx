import { act } from '@testing-library/react';

import { Home } from '@pages/index';
import { snapshotTest, test } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

jest.useFakeTimers();

const titles = ['Title 1', 'Title 2'];

snapshotTest(() => <Home funding={funding} partners={partners} titles={[]} />, undefined, 'Home');
snapshotTest(() => <Home funding={funding} partners={partners} titles={titles} />, undefined, 'Home');

it('Should test the Home page', async () => {
	const HomeComponent = () => <Home funding={funding} partners={partners} titles={titles} />;

	const { asFragment } = await test(HomeComponent);

	expect(asFragment()).toMatchSnapshot();

	await act(async () => {
		await jest.runOnlyPendingTimers(); //NOSONAR
	});

	expect(asFragment()).toMatchSnapshot();
});
