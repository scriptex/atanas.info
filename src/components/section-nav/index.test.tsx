import * as React from 'react';
import { render } from '@testing-library/react';

import { SectionNav } from '.';

describe('SectionNav component', () => {
	it('Should render the SectionNav component', () => {
		const { asFragment, container } = render(
			<SectionNav
				name="title"
				data={[
					{
						url: 'https://google.com',
						title: 'Title 1',
						description: 'Description 1'
					},
					{
						url: 'https://google.com',
						title: 'Title 2',
						description: 'Description 2'
					}
				]}
				active={0}
				onClick={jest.fn()}
			/>
		);

		expect(asFragment()).toMatchSnapshot();

		container.querySelector<HTMLElement>('.c-btn')?.click();

		expect(asFragment()).toMatchSnapshot();
	});
});
