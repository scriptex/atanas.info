import * as React from 'react';
import { render } from '@testing-library/react';

import { Icon } from '.';

describe('Icon component', () => {
	it('Should render the Icon component', () => {
		const { asFragment } = render(<Icon name="test" className="test" />);

		expect(asFragment()).toMatchSnapshot();
	});
});
