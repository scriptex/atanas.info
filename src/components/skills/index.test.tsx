import * as React from 'react';
import { render } from '@testing-library/react';

import { Skills } from '.';
import { mockUseEffect } from '../../scripts/shared';

describe('Skills component', () => {
	mockUseEffect();

	it('Should render the Skills component', () => {
		const { asFragment } = render(<Skills />);

		expect(asFragment()).toMatchSnapshot();
	});
});
