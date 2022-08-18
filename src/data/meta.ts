export type MetaTag = {
	name: string;
	content: string;
};

export const metaTags = [
	{
		name: 'msapplication-config',
		content: '/config.xml'
	}
];

export type LinkTag = {
	rel: string;
	href: string;
	type?: string;
	media?: string;
	sizes?: string;
};

export const linkTags: LinkTag[] = [];
