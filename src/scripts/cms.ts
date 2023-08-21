import type { Document } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { createClient, EntryCollection, EntrySkeletonType } from 'contentful';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
});

export type BioEntry = {
	title: string | undefined;
	content: string;
};

const extractBio = (data: EntryCollection<EntrySkeletonType, undefined, string>) =>
	data.items
		.map(item => item.fields)
		.map(({ title, content }) => ({
			title: title?.toString(),
			content: content ? documentToHtmlString(content as unknown as Document) : ''
		}));

export async function cms(type: 'bio'): Promise<BioEntry[]> {
	try {
		const contentTypes = await client.getContentTypes();
		const content_type = contentTypes.items.find(item => item.name.toLowerCase() === type)?.sys.id;

		if (!content_type) {
			return [];
		}

		const response = await client.getEntries({ content_type, order: ['fields.index'] });

		switch (type) {
			case 'bio':
				return extractBio(response);
			default:
				return [];
		}
	} catch (error: unknown) {
		return [];
	}
}
