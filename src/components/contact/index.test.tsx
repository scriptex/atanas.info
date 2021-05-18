import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from 'enzyme';

import { Contact } from '.';

describe('Contact component', () => {
	it('Should render the Contact component', () => {
		act(() => {
			const wrapper = render(<Contact />);

			expect(wrapper).toMatchSnapshot();
		});
	});
});
