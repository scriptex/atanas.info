import * as React from 'react';
import { render } from '@testing-library/react';

import { Svg } from '.';

describe('Svg component', () => {
	it('Should render the Svg component', () => {
		const { asFragment, rerender } = render(<Svg src="test" className="test" />);

		expect(asFragment()).toMatchSnapshot();

		rerender(<Svg src="test" />);

		expect(asFragment()).toMatchSnapshot();
	});
});
