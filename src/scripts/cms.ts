import type { Document } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Asset, createClient, EntryCollection, EntrySkeletonType } from 'contentful';

type CMSType =
	| 'bio'
	| 'owner'
	| 'slide'
	| 'video'
	| 'titles'
	| 'article'
	| 'timeline'
	| 'strength'
	| 'education'
	| 'experience'
	| 'certificate'
	| 'resume link'
	| 'resume more'
	| 'resume skills';

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

export type TimelineItem = Readonly<{
	date: string;
	icon: 'work' | 'education' | 'personal';
	index: number;
	title: string;
	content: string;
	location: string;
}>;

export type ResumeLink = Readonly<{
	icon: 'mail' | 'link' | 'location';
	text: string;
	index: number;
}>;

export type OwnerDetails = Readonly<{
	alt: string;
	name: string;
	index: number;
	title: string;
	image: string;
	summary: string;
	privateGitlabCalendar: Record<string, number>;
}>;

export type Education = Readonly<{
	index: number;
	degree: string;
	period: string;
	school: string;
}>;

export type Certificate = Readonly<{
	pdf: string;
	date: string;
	image: string;
	index: number;
	title: string;
}>;

export type Experience = Readonly<{
	index: number;
	title: string;
	period: string;
	details: string;
	project: string;
	location: string;
}>;

export type ResumeSkills = Readonly<{
	index: number;
	title: string;
	content: string[];
}>;

export type Strength = Readonly<{
	icon: 'share' | 'star' | 'brush' | 'clock';
	index: number;
	title: string;
	content: string;
}>;

export type ResumeMore = Readonly<{
	index: number;
	title: string;
	content: string;
}>;

export type ResumeData = Readonly<{
	more: ResumeMore[];
	links: ResumeLink[];
	owner: OwnerDetails;
	skills: ResumeSkills[];
	education: Education[];
	strengths: Strength[];
	experience: Experience[];
	certificates: Certificate[];
}>;

export type Slide = Readonly<{
	url: string;
	index: number;
	title: string;
	description: string;
}>;

export type Video = Readonly<{
	url: string;
	index: number;
	title: string;
	description: string;
}>;

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
});

const getHTMLString = <T extends Document>(data?: T): string => (data ? documentToHtmlString(data) : '');

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
				content: getHTMLString(content as Document)
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

		return data.items.map(item => item.fields as Article) ?? [];
	} catch (error: unknown) {
		return [];
	}
};

export const getTimelineFromCMS = async (): Promise<TimelineItem[]> => {
	try {
		const data = await getCMSData('timeline');

		return (
			data.items
				.map(item => item.fields)
				.map(
					({ title, content, ...rest }) =>
						({
							...rest,
							title: getHTMLString(title as Document),
							content: getHTMLString(content as Document)
						}) as TimelineItem
				) ?? []
		);
	} catch (error: unknown) {
		return [];
	}
};

export const getResumeLinksFromCMS = async (): Promise<ResumeLink[]> => {
	try {
		const links = await getCMSData('resume link');

		return links.items.map(item => item.fields as ResumeLink) ?? [];
	} catch (error: unknown) {
		return [];
	}
};

export const getOwnerDetailsFromCMS = async (): Promise<OwnerDetails> => {
	try {
		const data = await getCMSData('owner');
		const all = data.items.map(item => {
			const image = item.fields.image as Asset;

			return {
				...item.fields,
				alt: image.fields.description,
				image: `https:${image.fields.file?.url}`,
				summary: getHTMLString(item.fields.summary as Document)
			} as OwnerDetails;
		});

		return all[0];
	} catch (error: unknown) {
		return {
			alt: '',
			name: '',
			image: '',
			index: 0,
			title: '',
			summary: '',
			privateGitlabCalendar: {}
		};
	}
};

export const getEducationFromCMS = async (): Promise<Education[]> => {
	try {
		const data = await getCMSData('education');

		return data.items.map(item => item.fields as Education);
	} catch (error: unknown) {
		return [];
	}
};

export const getCertificatesFromCMS = async (): Promise<Certificate[]> => {
	try {
		const data = await getCMSData('certificate');

		return data.items.map(
			item =>
				({
					...item.fields,
					pdf: `https:${(item.fields.pdf as Asset).fields.file?.url}`,
					image: `https:${(item.fields.image as Asset).fields.file?.url}`
				}) as Certificate
		);
	} catch (error: unknown) {
		return [];
	}
};

export const getExperienceFromCMS = async (): Promise<Experience[]> => {
	try {
		const data = await getCMSData('experience');

		return data.items.map(
			item =>
				({
					...item.fields,
					details: getHTMLString(item.fields.details as Document),
					project: getHTMLString(item.fields.project as Document)
				}) as Experience
		);
	} catch (error: unknown) {
		return [];
	}
};

export const getResumeSkillsFromCMS = async (): Promise<ResumeSkills[]> => {
	try {
		const data = await getCMSData('resume skills');

		return data.items.map(item => item.fields as ResumeSkills);
	} catch (error: unknown) {
		return [];
	}
};

export const getStrengthsFromCMS = async (): Promise<Strength[]> => {
	try {
		const data = await getCMSData('strength');

		return data.items.map(item => item.fields as Strength);
	} catch (error: unknown) {
		return [];
	}
};

export const getResumeMoreFromCMS = async (): Promise<ResumeMore[]> => {
	try {
		const data = await getCMSData('resume more');

		return data.items.map(
			item =>
				({
					...item.fields,
					content: getHTMLString(item.fields.content as Document)
				}) as ResumeMore
		);
	} catch (error: unknown) {
		return [];
	}
};

export const getSlidesFromCMS = async (): Promise<Slide[]> => {
	try {
		const data = await getCMSData('slide');

		return data.items.map(item => item.fields as Slide);
	} catch (error: unknown) {
		return [];
	}
};

export const getVideosFromCMS = async (): Promise<Video[]> => {
	try {
		const data = await getCMSData('video');

		return data.items.map(item => item.fields as Video);
	} catch (error: unknown) {
		return [];
	}
};
