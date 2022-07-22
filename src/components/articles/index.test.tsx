import * as React from 'react';
import { render } from '@testing-library/react';

import * as utils from '../../scripts/shared';
import { Articles } from '.';

describe('Articles component', () => {
	it('Should render the Articles component', () => {
		const { rerender, asFragment } = render(<Articles />);

		expect(asFragment()).toMatchSnapshot();

		Object.defineProperty(utils, 'isPrerendering', { value: true });

		rerender(<Articles />);

		expect(asFragment()).toMatchSnapshot();
	});
});
