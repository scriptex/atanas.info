import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '.';

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
describe('Button component', () => {
	it('Should render the Button component with type button', () => {
		const { asFragment, rerender } = render(
			<Button type="submit" className="button" onClick={jest.fn()}>
				Button
			</Button>
		);

		expect(asFragment()).toMatchSnapshot();

		rerender(
			<Button type="submit" onClick={jest.fn()}>
				Button
			</Button>
		);

		expect(asFragment()).toMatchSnapshot();

		rerender(
			<Button type="link" className="link" href="https://google.com" rel="noopener noreferrrer" target="_blank">
				Link
			</Button>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
// codebeat:enable[ABC,LOC,BLOCK_NESTING]
