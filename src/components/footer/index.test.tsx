import * as React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '.';
import * as stats from '../containers/stats';

jest.spyOn(stats, 'formatDate');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
stats.formatDate.mockImplementation(() => 'Mock date');

describe('Footer component', () => {
	it('Should render the Footer component', () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper).toMatchSnapshot();
	});
});
