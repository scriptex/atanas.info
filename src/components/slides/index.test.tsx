import * as React from 'react';
import { render } from '@testing-library/react';

import * as utils from '../../scripts/shared';
import { SectionSlides } from '.';

describe('SectionSlides component', () => {
	it('Should render the SectionSlides component', () => {
		const { asFragment, rerender } = render(<SectionSlides />);

		expect(asFragment()).toMatchSnapshot();

		Object.defineProperty(utils, 'isPrerendering', { value: true });

		rerender(<SectionSlides />);

		expect(asFragment()).toMatchSnapshot();
	});
});
