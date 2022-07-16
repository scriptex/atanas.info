import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionCertificates } from '.';

describe('SectionCertificates component', () => {
	it('Should render the SectionCertificates component', () => {
		const { asFragment } = render(<SectionCertificates />);

		expect(asFragment()).toMatchSnapshot();
	});
});
