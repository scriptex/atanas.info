import * as React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '.';
import * as stats from '../section-stats';

jest.spyOn(stats, 'formatDate');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
stats.formatDate.mockImplementation(() => 'Mock date');

describe('Footer component', () => {
	it('Should render the Footer component', () => {
		const { asFragment } = render(<Footer />);

		expect(asFragment()).toMatchSnapshot();
	});
});
