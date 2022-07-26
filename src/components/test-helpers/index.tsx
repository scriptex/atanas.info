import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

export const buttonsTest = (container: HTMLElement, asFragment: () => DocumentFragment, selector: string): void => {
	act(() => {
		container.querySelectorAll<HTMLElement>(selector).forEach(button => {
			button.click();

			expect(asFragment()).toMatchSnapshot();
		});
	});
};

export const snapshotTestWithButtons = (Component: React.FC, selector: string): void => {
	const { name } = Component;

	describe(`${name} component`, () => {
		it(`Should render the ${name} component`, () => {
			const { asFragment, container } = render(<Component />);

			expect(asFragment()).toMatchSnapshot();

			buttonsTest(container, asFragment, selector);
		});
	});
};

export const snapshotTestWithUnmount = (Component: React.FC): void => {
	it(`Should render the ${Component.name} component`, () => {
		const { asFragment, unmount } = render(<Component />);

		expect(asFragment()).toMatchSnapshot();

		unmount();

		expect(asFragment()).toMatchSnapshot();
	});
};
