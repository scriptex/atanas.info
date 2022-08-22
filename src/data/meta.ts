export type MetaTag = {
	name: string;
	content: string;
};

export const metaTags = [];

export type LinkTag = {
	rel: string;
	href: string;
	type?: string;
	media?: string;
	sizes?: string;
};

export const linkTags: LinkTag[] = [];
