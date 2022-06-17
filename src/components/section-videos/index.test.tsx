import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionVideos } from '.';

describe('SectionVideos component', () => {
	it('Should render the SectionVideos component', () => {
		const { asFragment } = render(<SectionVideos />);

		expect(asFragment()).toMatchSnapshot();
	});
});
