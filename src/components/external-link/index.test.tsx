import * as React from 'react';
import { shallow } from 'enzyme';

import { ExternalLink } from '.';

describe('ExternalLink component', () => {
	it('Should render the ExternalLink component', () => {
		const wrapper = shallow(<ExternalLink href="https://google.com">Link</ExternalLink>);

		expect(wrapper).toMatchSnapshot();
	});

	it('Should render the ExternalLink component with more attributes', () => {
		const wrapper = shallow(
			<ExternalLink href="https://google.com" className="link">
				Link
			</ExternalLink>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
