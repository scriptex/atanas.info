import * as React from 'react';
import { render } from '@testing-library/react';

import { Hello } from '.';
import { Slider } from './slider';
import { mockUseEffect } from '../../scripts/shared';

describe('Slider component', () => {
	it('Should render the Slider component', () => {
		const { asFragment, unmount } = render(<Slider />);

		expect(asFragment()).toMatchSnapshot();

		unmount();

		expect(asFragment()).toMatchSnapshot();
	});
});

describe('Hello component', () => {
	mockUseEffect();

	it('Should render the Hello component', () => {
		const { asFragment, unmount } = render(<Hello />);

		expect(asFragment()).toMatchSnapshot();

		unmount();

		expect(asFragment()).toMatchSnapshot();
	});
});
