import book from '@data/lotties/book.json';
import portfolio from '@data/lotties/portfolio.json';
import { Animation } from '@components';
import { openSourceProjectsList } from '@data/open-source';

export const blogProps = {
	style: { backgroundImage: 'url(images/temp/articles.jpg)' },
	className: 'c-section--slides fullsize-background',
	hasButton: true,
	additionalElements: <Animation data={book} width={150} height={150} className="c-section__animation" />
};

export const openSourceProjects = openSourceProjectsList.map((repo, index) => ({
	url: repo?.url,
	text: repo?.title,
	index,
	image: `/images/unsplash/${(index % 25) + 1}.jpeg`
}));

export const portfolioSectionProps = {
	id: 'portfolio',
	title: 'Portfolio',
	hasButton: true,
	additionalElements: <Animation data={portfolio} width={200} height={150} className="c-section__animation" />
};
