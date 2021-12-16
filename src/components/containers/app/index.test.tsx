import * as React from 'react';
import { shallow } from 'enzyme';

import { App } from '.';

describe('App component', () => {
	it('Should render the App component', () => {
		const wrapper = shallow(<App />);

		expect(wrapper).toMatchSnapshot();
	});
});
