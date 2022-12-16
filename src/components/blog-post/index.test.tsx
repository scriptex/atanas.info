import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { BlogPost } from '.';
import { snapshotTest } from '../test-helpers';

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
			content: '<div>Content</div>',
			external: false
		}
	]
}));

const BlogPostComponent: React.FC = () => (
	<Router>
		<BlogPost />
	</Router>
);

afterAll(() => {
	jest.resetAllMocks();
});

snapshotTest(BlogPostComponent);
