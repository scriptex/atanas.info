import * as React from 'react';
import { render, shallow } from 'enzyme';

import { SectionSocial } from '.';
import * as stats from '../stats';
import * as utils from '../../../scripts/shared';

jest.mock('../../../data/last.fm-insights.json', () => ({
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

	it('Should render the SectionSocial component while prerendering', () => {
		Object.defineProperty(utils, 'isPrerendering', { value: true });

		const wrapper = render(<SectionSocial />);

		expect(wrapper).toMatchSnapshot();
	});
});
