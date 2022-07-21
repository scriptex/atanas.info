import * as React from 'react';
import { render } from '@testing-library/react';

import { Timeline } from '.';

beforeEach(() => {
	const mockIntersectionObserver = jest.fn();

	mockIntersectionObserver.mockReturnValue({
		observe: jest.fn().mockReturnValue(null),
		unobserve: jest.fn().mockReturnValue(null),
		disconnect: jest.fn().mockReturnValue(null)
	});

	window.IntersectionObserver = mockIntersectionObserver;
});

describe('Timeline component', () => {
	it(`Should render the Timeline component`, () => {
		const { asFragment } = render(<Timeline />);

		expect(asFragment()).toMatchSnapshot();
	});
});
