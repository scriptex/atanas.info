import * as React from 'react';
import { shallow } from 'enzyme';

import { Icon } from '.';

describe('Icon component', () => {
	it('Should render the Icon component', () => {
		const wrapper = shallow(<Icon name="test" className="test" />);

		expect(wrapper).toMatchSnapshot();
	});
});
