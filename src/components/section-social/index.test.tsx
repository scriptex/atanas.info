import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionSocial } from '.';

jest.mock('../../scripts/last.fm-insights.json', () => ({
	default: {
		weeklyAlbumChart: {
			weeklyalbumchart: {
				album: []
			}
		},
		weeklyArtistChart: {
			weeklyartistchart: {
				artist: []
			}
		},
		weeklyTrackChart: {
			weeklytrackchart: {
				track: []
			}
		}
	}
}));

describe('SectionSocial component', () => {
	it('Should render the SectionSocial component', () => {
		const wrapper = shallow(<SectionSocial />);

		expect(wrapper).toMatchSnapshot();
	});
});
