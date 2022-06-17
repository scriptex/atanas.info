import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionResume } from '.';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
	window.print = jest.fn();
});

describe('SectionResume component', () => {
	it('Should render the SectionResume component', () => {
		const { asFragment, container } = render(<SectionResume />);

		expect(asFragment()).toMatchSnapshot();

		act(() => {
			container.querySelectorAll<HTMLElement>('.c-btn').forEach(button => {
				button.click();

				expect(asFragment()).toMatchSnapshot();
			});
		});
	});
});
