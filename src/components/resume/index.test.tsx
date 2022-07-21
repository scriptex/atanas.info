import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import { Resume } from '.';

beforeEach(() => {
	window.print = jest.fn();
});

describe('Resume component', () => {
	it('Should render the Resume component', () => {
		const { asFragment, container } = render(<Resume />);

		expect(asFragment()).toMatchSnapshot();

		act(() => {
			container.querySelectorAll<HTMLElement>('.c-btn').forEach(button => {
				button.click();

				expect(asFragment()).toMatchSnapshot();
			});
		});
	});
});
