import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from 'enzyme';

import { Funding } from '.';

describe('Funding component', () => {
	it('Should render the Funding component', () => {
		act(() => {
			const wrapper = render(<Funding />);

			expect(wrapper).toMatchSnapshot();
		});
	});
});
