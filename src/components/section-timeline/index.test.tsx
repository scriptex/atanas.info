import * as React from 'react';
import { render } from '@testing-library/react';

import { WorkIcon, PersonalIcon, EducationIcon, SectionTimeline } from '.';
beforeEach(() => {
	// IntersectionObserver isn't available in test environment
	const mockIntersectionObserver = jest.fn();

	mockIntersectionObserver.mockReturnValue({
		observe: jest.fn().mockReturnValue(null),
		unobserve: jest.fn().mockReturnValue(null),
		disconnect: jest.fn().mockReturnValue(null)
	});

	// eslint-disable-next-line compat/compat
	window.IntersectionObserver = mockIntersectionObserver;
});

describe('SectionTimeline component', () => {
	[WorkIcon, PersonalIcon, EducationIcon, SectionTimeline].forEach(Component => {
		it(`Should render the ${Component.name} component`, () => {
			const { asFragment } = render(<Component />);

			expect(asFragment()).toMatchSnapshot();
		});
	});
});
