import * as React from 'react';
import { shallow } from 'enzyme';

import { SectionCertificates } from '.';

describe('SectionCertificates component', () => {
	it('Should render the SectionCertificates component', () => {
		const wrapper = shallow(<SectionCertificates />);

		expect(wrapper).toMatchSnapshot();
	});
});
