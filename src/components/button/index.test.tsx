import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from '.';

describe('Button component', () => {
	it('Should render the Button component with type button', () => {
		const wrapper = shallow(
			<Button type="submit" className="button" onClick={jest.fn()}>
				Button
			</Button>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the Button component with type link', () => {
		const wrapper = shallow(
			<Button type="link" className="link" href="https://google.com" rel="noopener noreferrrer" target="_blank">
				Link
			</Button>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
