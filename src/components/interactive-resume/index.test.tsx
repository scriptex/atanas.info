import * as React from 'react';
import { render } from '@testing-library/react';

import { InteractiveResume } from '.';

describe('InteractiveResume component', () => {
	it('Should render the InteractiveResume component', () => {
		const { asFragment } = render(<InteractiveResume />);

		expect(asFragment()).toMatchSnapshot();
	});
});
