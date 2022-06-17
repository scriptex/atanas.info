import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionInteractiveResume } from '.';

describe('SectionInteractiveResume component', () => {
	it('Should render the SectionInteractiveResume component', () => {
		const { asFragment } = render(<SectionInteractiveResume />);

		expect(asFragment()).toMatchSnapshot();
	});
});
