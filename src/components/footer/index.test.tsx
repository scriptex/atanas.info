import * as React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '.';
import * as stats from '../stats';

jest.spyOn(stats, 'formatDate');

(stats.formatDate as jest.Mock).mockImplementation(() => 'Mock date');

describe('Footer component', () => {
	it('Should render the Footer component', () => {
		const { asFragment } = render(<Footer />);

		expect(asFragment()).toMatchSnapshot();
	});
});
