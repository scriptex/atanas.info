import * as React from 'react';
import { render } from '@testing-library/react';

import * as utils from '../../scripts/shared';
import { SectionArticles } from '.';

describe('SectionArticles component', () => {
	it('Should render the SectionArticles component', () => {
		const { rerender, asFragment } = render(<SectionArticles />);

		expect(asFragment()).toMatchSnapshot();

		Object.defineProperty(utils, 'isPrerendering', { value: true });

		rerender(<SectionArticles />);

		expect(asFragment()).toMatchSnapshot();
	});
});
