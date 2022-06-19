import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionSocial } from '.';
import * as stats from '../section-stats';

jest.mock('../../data/last.fm-insights.json', () => ({
	default: {
		weeklyAlbumChart: [],
		topAlbums: []
	}
}));

jest.spyOn(stats, 'formatDate');

(stats.formatDate as jest.Mock).mockImplementation(() => 'Mock date');

describe('SectionSocial component', () => {
	it('Should render the SectionSocial component', () => {
		const { asFragment } = render(<SectionSocial />);

		expect(asFragment()).toMatchSnapshot();

		expect(asFragment()).toMatchSnapshot();
	});
});
