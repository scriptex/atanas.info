import { Animation } from '@components';
import { openSourceProjectsList } from '@data/open-source';

import book from '@data/lotties/book.json';
import portfolio from '@data/lotties/portfolio.json';

export const blogProps = {
	additionalElements: <Animation className="c-section__animation" data={book} height={150} width={150} />,
	className: 'c-section--slides fullsize-background',
	hasButton: true,
	style: { backgroundImage: 'url(images/temp/articles.jpg)' }
};

export const openSourceProjects = openSourceProjectsList.map((repo, index) => ({
	image: `/images/unsplash/${(index % 25) + 1}.jpeg`,
	index,
	text: repo?.title,
	url: repo?.url
}));

export const portfolioSectionProps = {
	additionalElements: <Animation className="c-section__animation" data={portfolio} height={150} width={200} />,
	hasButton: true,
	id: 'portfolio',
	title: 'Portfolio'
};
