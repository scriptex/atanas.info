import type { Document } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Asset, createClient, EntryCollection, EntrySkeletonType } from 'contentful';

type CMSType = 'bio' | 'titles' | 'article';
type RawCMSData = EntryCollection<EntrySkeletonType, undefined, string>;

export type BioEntry = {
	title: string | undefined;
	content: string;
};

export type Article = Readonly<{
	url: string;
	title: string;
	image?: Asset;
	index: number;
	external: boolean;
	externalImage?: string;
}>;

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
});

const getCMSData = async (type: CMSType): Promise<RawCMSData> => {
	const contentTypes = await client.getContentTypes();
	const content_type = contentTypes.items.find(item => item.name.toLowerCase() === type)?.sys.id;

	if (!content_type) {
		return {
			skip: 0,
			limit: 0,
			total: 0,
			items: []
		};
	}

	return await client.getEntries({ content_type, order: ['fields.index'] });
};

export const getBioFromCMS = async (): Promise<BioEntry[]> => {
	try {
		const data = await getCMSData('bio');

		return data.items
			.map(item => item.fields)
			.map(({ title, content }) => ({
				title: title?.toString(),
				content: content ? documentToHtmlString(content as unknown as Document) : ''
			}));
	} catch (error: unknown) {
		return [];
	}
};

export const getTitlesFromCMS = async (): Promise<string[]> => {
	try {
		const data = await getCMSData('titles');
		const content = data.items.map(item => item.fields).map(({ content }) => content as unknown as string[]);

		return content?.[0] ?? [];
	} catch (error: unknown) {
		return [];
	}
};

export const getArticlesFromCMS = async (): Promise<Article[]> => {
	try {
		const data = await getCMSData('article');

		return (data.items.map(item => item.fields) as Article[]) ?? [];
	} catch (error: unknown) {
		return [];
	}
};
