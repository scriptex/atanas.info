import { FundingNetwork } from '@scripts/cms';

export const funding: FundingNetwork[] = [
	{
		url: 'https://example.com/1',
		name: 'Funding 1',
		index: 0,
		matrix: 'matrix(1,0,0,1,0,0)'
	},
	{
		url: 'https://example.com/2',
		name: 'Funding 2',
		index: 1,
		matrix: 'matrix(0,1,1,0,1,1)'
	}
];
