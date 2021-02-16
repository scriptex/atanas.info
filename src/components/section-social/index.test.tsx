import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionSocial } from '.';
import * as stats from '../section-stats';

jest.mock('../../scripts/last.fm-insights.json', () => ({
	default: {
		weeklyAlbumChart: [],
		topAlbums: []
	}
}));

jest.spyOn(stats, 'formatDate');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
stats.formatDate.mockImplementation(() => 'Mock date');

describe('SectionSocial component', () => {
	it('Should render the SectionSocial component', () => {
		const wrapper = shallow(<SectionSocial />);

		expect(wrapper).toMatchSnapshot();
	});
});
