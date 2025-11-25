import type { FundingNetwork } from '@scripts/cms';

export const funding: FundingNetwork[] = [
	{
		index: 0,
		matrix: 'matrix(1,0,0,1,0,0)',
		name: 'Funding 1',
		url: 'https://example.com/1'
	},
	{
		index: 1,
		matrix: 'matrix(0,1,1,0,1,1)',
		name: 'Funding 2',
		url: 'https://example.com/2'
	}
];
