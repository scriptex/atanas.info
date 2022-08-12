import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { BlogPost } from '.';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn().mockReturnValue({ slug: 'bulk-image-watermark-with-nodejs-and-jimp' })
}));

jest.mock('../../data/articles', () => ({
	articles: [
		{
			url: '/blog/bulk-image-watermark-with-nodejs-and-jimp',
			title: 'Bulk image watermark with NodeJS and Jimp',
			image: '/images/temp/bulk-image-watermark-with-nodejs-and-jimp.jpg',
			content: jest.fn(() => <div>Content</div>),
			external: false
		}
	]
}));

describe('BlogPost component', () => {
	it('Should render the BlogPost component', () => {
		let result!: RenderResult;

		act(() => {
			result = render(
				<Router>
					<BlogPost />
				</Router>
			);
		});

		expect(result.asFragment()).toMatchSnapshot();
	});
});
