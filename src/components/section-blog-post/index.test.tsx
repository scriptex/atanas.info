import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render, RenderResult } from '@testing-library/react';

import { SectionBlogPost } from '.';

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

describe('SectionBlogPost component', () => {
	it('Should render the SectionBlogPost component', () => {
		let result: RenderResult;

		act(() => {
			result = render(<SectionBlogPost />);
		});

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		expect(result.asFragment()).toMatchSnapshot();
	});
});
