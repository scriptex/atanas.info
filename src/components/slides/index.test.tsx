import * as React from 'react';
import { render } from '@testing-library/react';

import * as utils from '../../scripts/shared';
import { Slides } from '.';

describe('Slides component', () => {
	it('Should render the Slides component', () => {
		const { asFragment, rerender } = render(<Slides />);

		expect(asFragment()).toMatchSnapshot();

		Object.defineProperty(utils, 'isPrerendering', { value: true });

		rerender(<Slides />);

		expect(asFragment()).toMatchSnapshot();
	});
});
