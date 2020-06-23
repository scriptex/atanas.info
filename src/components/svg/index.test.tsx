import * as React from 'react';
import { shallow } from 'enzyme';

import { Svg } from '.';

describe('Svg component', () => {
	it('Should render the Svg component', () => {
		const wrapper = shallow(<Svg src="test" className="test" />);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the Svg component without an additional className', () => {
		const wrapper = shallow(<Svg src="test" />);

		expect(wrapper).toMatchSnapshot();
	});
});
