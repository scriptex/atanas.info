import * as React from 'react';
import { shallow } from 'enzyme';

import { Loader } from '.';

describe('Loader component', () => {
	it('Should render the Loader component', () => {
		const wrapper = shallow(<Loader />);

		expect(wrapper).toMatchSnapshot();
	});
});
