import type { Asset } from 'contentful';

import { Article } from '@scripts/cms';

export const articles: Article[] = [
	{
		external: true,
		externalImage: 'https://article.one/image.png',
		index: 0,
		title: 'Article 1 title',
		url: 'https://article.one/'
	},
	{
		external: false,
		image: {
			fields: {
				file: {
					url: 'https://article.two/image.png'
				}
			}
		} as Asset,
		index: 1,
		title: 'Article 2 title',
		url: 'https://article.two/'
	}
];
