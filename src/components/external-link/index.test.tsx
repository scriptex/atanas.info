import * as React from 'react';
import { render } from '@testing-library/react';

import { ExternalLink } from '.';

describe('ExternalLink component', () => {
	it('Should render the ExternalLink component', () => {
		const { asFragment, rerender } = render(<ExternalLink href="https://google.com">Link</ExternalLink>);

		expect(asFragment()).toMatchSnapshot();

		rerender(
			<ExternalLink href="https://google.com" className="link">
				Link
			</ExternalLink>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
