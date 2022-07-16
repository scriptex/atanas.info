import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionSkills } from '.';
import { mockUseEffect } from '../../scripts/shared';

describe('SectionSkills component', () => {
	mockUseEffect();

	it('Should render the SectionSkills component', () => {
		const { asFragment } = render(<SectionSkills />);

		expect(asFragment()).toMatchSnapshot();
	});
});
