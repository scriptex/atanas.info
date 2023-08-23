import type { Asset } from 'contentful';

import { Article } from '@scripts/cms';

export const articles: Article[] = [
	{
		url: 'https://article.one/',
		title: 'Article 1 title',
		index: 0,
		external: true,
		externalImage: 'https://article.one/image.png'
	},
	{
		url: 'https://article.two/',
		title: 'Article 2 title',
		index: 1,
		external: false,
		image: {
			fields: {
				file: {
					url: 'https://article.two/image.png'
				}
			}
		} as Asset
	}
];
