import { fireEvent } from '@testing-library/react';

import { Header } from '@components';

import { snapshotTest, test } from '@test-config/helpers';

snapshotTest(Header);

it('Should test the menu toggling', async () => {
	const { asFragment, container } = await test(Header);

	expect(asFragment()).toMatchSnapshot();

	fireEvent.click(container.querySelector('.c-nav__toggle')!);

	expect(asFragment()).toMatchSnapshot();

	fireEvent.click(container.querySelector('.c-nav a')!);

	expect(asFragment()).toMatchSnapshot();

	fireEvent.click(container.querySelector('.c-theme-switcher')!);

	expect(asFragment()).toMatchSnapshot();
});
