import * as React from 'react';
import { render } from 'enzyme';

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
		const wrapper = render(<SectionBlogPost />);

		expect(wrapper).toMatchSnapshot();
	});
});
