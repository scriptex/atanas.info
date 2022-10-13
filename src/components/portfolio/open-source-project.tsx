import * as React from 'react';
import { useParams } from 'react-router-dom';

import { MDX } from '..';
import { Routes } from '../../data/routes';
import { openSourceProjectsList } from '../../data/open-source';

export const BlogPost: React.FC = () => {
	const { slug } = useParams();
	const project = openSourceProjectsList.find(item => item.title.split('/')[1] === slug);

	return (
		<MDX
			id="open-source-project"
			back={Routes.PORTFOLIO_OPEN_SOURCE_PROJECTS}
			title={project?.title || 'Error fetching data from Github'}
			image={project?.image || 'https://source.unsplash.com/random/1280x840/?code'}
			content={project?.content || (() => <h1 className="text-center">Please try again later.</h1>)}
		/>
	);
};

export default BlogPost;
