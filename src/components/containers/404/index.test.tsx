import * as React from 'react';
import { shallow } from 'enzyme';

import { ErrorPage } from '.';

describe('ErrorPage component', () => {
	it('Should render the ErrorPage component', () => {
		const wrapper = shallow(<ErrorPage />);

		expect(wrapper).toMatchSnapshot();
	});
});
