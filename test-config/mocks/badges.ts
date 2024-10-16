import { Asset } from 'contentful';

import { Badge } from '@scripts/cms';

export const badges: Badge[] = [
	{
		date: '2020-12-01T00:00+03:00',
		image: {
			fields: {
				file: {
					url: 'https://www.file1.com/image.png'
				}
			}
		} as Asset,
		index: 0,
		issuer: 'Issuer 1',
		issuerUrl: 'https://www.issuer1.com',
		title: 'Badge 1',
		url: 'https://www.url1.com'
	},
	{
		date: '2020-12-02T00:00+03:00',
		image: {
			fields: {
				file: {
					url: 'https://www.file2.com/image.png'
				}
			}
		} as Asset,
		index: 1,
		issuer: 'Issuer 2',
		issuerUrl: 'https://www.issuer2.com',
		title: 'Badge 2',
		url: 'https://www.url2.com'
	}
];
