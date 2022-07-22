import * as React from 'react';
import { render } from '@testing-library/react';

import { Social } from '.';
import * as shared from '../../scripts/shared';

jest.mock('../../data/last.fm-insights.json', () => ({
	default: {
		weeklyAlbumChart: [],
		topAlbums: []
	}
}));

jest.spyOn(shared, 'formatDate');

(shared.formatDate as jest.Mock).mockImplementation(() => 'Mock date');

describe('Social component', () => {
	it('Should render the Social component', () => {
		const { asFragment } = render(<Social />);

		expect(asFragment()).toMatchSnapshot();

		expect(asFragment()).toMatchSnapshot();
	});
});
