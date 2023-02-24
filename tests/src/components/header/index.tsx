import { fireEvent } from '@testing-library/react';

import { Header } from '@components';
import { test, snapshotTest } from '@test-config/helpers';

snapshotTest(Header);

it('Should test the menu toggling', async () => {
	const { asFragment, container, getByTestId } = await test(Header);

	expect(asFragment()).toMatchSnapshot();

	fireEvent.click(container.querySelector('.c-nav__toggle')!);

	expect(asFragment()).toMatchSnapshot();

	fireEvent.click(container.querySelector('.c-nav a')!);

	expect(asFragment()).toMatchSnapshot();

	fireEvent.click(getByTestId('c-theme-switcher')!);

	expect(asFragment()).toMatchSnapshot();
});
