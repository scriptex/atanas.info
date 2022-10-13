import * as React from 'react';
import { useParams } from 'react-router-dom';

import { MDX } from '..';
import { Routes } from '../../data/routes';
import { articles } from '../../data/articles';

export const BlogPost: React.FC = () => {
	const { slug } = useParams();
	const article = articles.find(({ url }) => url.includes(slug!));

	return (
		<MDX
			id="blog-post"
			back={Routes.BLOG}
			title={article?.title || 'Error fetching data from Github'}
			image={article?.image || 'https://source.unsplash.com/random/1280x840/?code'}
			content={article?.content}
		/>
	);
};

export default BlogPost;
