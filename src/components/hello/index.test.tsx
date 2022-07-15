import * as React from 'react';
import { render } from '@testing-library/react';

import { mockUseEffect } from '../../scripts/shared';
import { Slider, SectionHello } from '.';

describe('Slider component', () => {
	it('Should render the Slider component', () => {
		const { asFragment, unmount } = render(<Slider />);

		expect(asFragment()).toMatchSnapshot();

		unmount();

		expect(asFragment()).toMatchSnapshot();
	});
});

describe('SectionHello component', () => {
	mockUseEffect();

	it('Should render the SectionHello component', () => {
		const { asFragment, unmount } = render(<SectionHello />);

		expect(asFragment()).toMatchSnapshot();

		unmount();

		expect(asFragment()).toMatchSnapshot();
	});
});
