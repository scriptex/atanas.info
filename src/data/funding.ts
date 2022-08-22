export type FundingNetworkData = {
	url: string;
	icon: string;
	name: string;
	matrix: string;
};

export const fundingNetworks: FundingNetworkData[] = [
	{
		url: 'https://github.com/sponsors/scriptex',
		icon: 'github',
		name: 'Github',
		matrix: 'matrix(1,0,0,1,0,0)'
	},
	{
		url: 'https://www.patreon.com/atanas',
		icon: 'patreon',
		name: 'Patreon',
		matrix: 'matrix(0.5,-0.86602,0.86602,0.5,-91.5063509461097,341.5063509461096)'
	},
	{
		url: 'https://paypal.me/scriptex',
		icon: 'paypal',
		name: 'PayPal',
		matrix: 'matrix(-0.49999,-0.86602,0.86602,-0.49999,158.49364905389024,591.5063509461097)'
	},
	{
		url: 'https://ko-fi.com/scriptex',
		icon: 'ko-fi',
		name: 'Ko-fi',
		matrix: 'matrix(-1,0,0,-1,500,500)'
	},
	{
		url: 'https://liberapay.com/scriptex',
		icon: 'liberapay',
		name: 'Liberapay',
		matrix: 'matrix(-0.5,0.86602,-0.86602,-0.5,591.5063509461097,158.49364905389052)'
	},
	{
		url: 'https://revolut.me/scriptex',
		icon: 'revolut',
		name: 'revolut',
		matrix: 'matrix(0.5,0.86602,-0.86602,0.5,341.50635094610965,-91.50635094610965)'
	}
];
