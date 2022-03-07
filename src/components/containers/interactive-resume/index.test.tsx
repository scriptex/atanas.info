import * as React from 'react';
import { render } from 'enzyme';

import { SectionInteractiveResume } from '.';

describe('SectionInteractiveResume component', () => {
	it('Should render the SectionInteractiveResume component', () => {
		const wrapper = render(<SectionInteractiveResume />);

		expect(wrapper).toMatchSnapshot();
	});
});
