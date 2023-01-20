import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render, RenderResult, waitFor } from '@testing-library/react';

import * as shared from '@scripts/shared';

export const snapshotTest = (
	Component: React.FC<Readonly<React.ComponentProps<any>>>,
	buttonSelector?: string
): void => {
	const { name } = Component;

	jest.spyOn(shared, 'formatDate');

	(shared.formatDate as jest.Mock).mockImplementation(() => 'Mock date');

	afterAll(() => {
		jest.clearAllMocks();
	});

	describe(`${name} component`, () => {
		it(`Should render the ${name} component`, async () => {
			let result!: RenderResult;

			await act(async () => {
				result = await waitFor(() => render(<Component />));
			});

			const { asFragment, container } = result;

			expect(asFragment()).toMatchSnapshot();

			if (buttonSelector) {
				act(() => {
					container.querySelectorAll<HTMLElement>(buttonSelector).forEach(button => {
						if (!button.hasAttribute('download')) {
							button.click();

							expect(asFragment()).toMatchSnapshot();
						}
					});
				});
			}
		});

		it(`Should unmount the ${name} component`, async () => {
			let result!: RenderResult;

			await act(async () => {
				result = await waitFor(() => render(<Component />));
			});

			const { unmount, asFragment } = result;

			unmount();

			expect(asFragment()).toMatchSnapshot();
		});
	});
};
