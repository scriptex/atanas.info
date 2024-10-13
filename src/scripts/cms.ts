import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';
import { Asset, createClient, EntryCollection, EntrySkeletonType } from 'contentful';

import type { ForceNode } from '@data/skills-list';

import type { Partner } from './types';

type CMSType =
	| 'bio'
	| 'owner'
	| 'slide'
	| 'video'
	| 'titles'
	| 'article'
	| 'funding'
	| 'partner'
	| 'strength'
	| 'timeline'
	| 'education'
	| 'experience'
	| 'occupation'
	| 'certificate'
	| 'resume link'
	| 'resume more'
	| 'testimonial'
	| 'resume skills'
	| 'githubskyline';

type RawCMSData = EntryCollection<EntrySkeletonType, undefined, string>;

export type BioEntry = {
	content: string;
	title: string | undefined;
};

export type Article = Readonly<{
	external: boolean;
	externalImage?: string;
	image?: Asset;
	index: number;
	title: string;
	url: string;
}>;

export type TimelineItem = Readonly<{
	content: string;
	date: string;
	icon: 'work' | 'education' | 'personal';
	index: number;
	location: string;
	title: string;
}>;

export type ResumeLink = Readonly<{
	icon: 'mail' | 'link' | 'location';
	index: number;
	text: string;
}>;

export type OwnerDetails = Readonly<{
	alt: string;
	image: string;
	index: number;
	name: string;
	privateGitlabCalendar: Record<string, number>;
	summary: string;
	title: string;
}>;

export type Education = Readonly<{
	degree: string;
	index: number;
	period: string;
	school: string;
}>;

export type Certificate = Readonly<{
	date: string;
	image: string;
	index: number;
	pdf: string;
	title: string;
}>;

export type Experience = Readonly<{
	details: string;
	index: number;
	location: string;
	period: string;
	project: string;
	title: string;
}>;

export type ResumeSkills = Readonly<{
	content: string[];
	index: number;
	title: string;
}>;

export type Strength = Readonly<{
	content: string;
	icon: 'share' | 'star' | 'brush' | 'clock';
	index: number;
	title: string;
}>;

export type ResumeMore = Readonly<{
	content: string;
	index: number;
	title: string;
}>;

export type ResumeData = Readonly<{
	certificates: Certificate[];
	education: Education[];
	experience: Experience[];
	links: ResumeLink[];
	more: ResumeMore[];
	owner: OwnerDetails;
	skills: ResumeSkills[];
	strengths: Strength[];
}>;

export type Slide = Readonly<{
	description: string;
	index: number;
	title: string;
	url: string;
}>;

export type Video = Readonly<{
	description: string;
	index: number;
	title: string;
	url: string;
}>;

export type CMSPartner = Omit<Partner, 'image'> &
	Readonly<{
		image: Asset;
	}>;

export type Occupation = Omit<ForceNode, 'text'> &
	Readonly<{
		index: number;
		name: string;
	}>;

export type FundingNetwork = Readonly<{
	index: number;
	matrix: string;
	name: string;
	url: string;
}>;

type SharedTestimonial = Readonly<{
	authorName: string;
	authorRelationship: string;
	authorTitle: string;
	authorUrl: string;
	date: string;
	index: number;
}>;

type CMSTestimonial = SharedTestimonial &
	Readonly<{
		content: Document;
		image: Asset;
	}>;

export type Testimonial = SharedTestimonial &
	Readonly<{
		content: string;
		image: string;
	}>;

export type GithubSkylineData = {
	background: Asset;
	index: number;
	texture: Asset;
	years: Asset[];
};

const client = createClient({
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
	space: process.env.CONTENTFUL_SPACE_ID!
});

const getHTMLString = <T extends Document>(data?: T): string => (data ? documentToHtmlString(data) : '');

const getCMSData = async (type: CMSType): Promise<RawCMSData> => {
	const contentTypes = await client.getContentTypes();
	const content_type = contentTypes.items.find(item => item.name.toLowerCase() === type)?.sys.id;

	if (!content_type) {
		return {
			items: [],
			limit: 0,
			skip: 0,
			total: 0
		};
	}

	return await client.getEntries({ content_type, order: ['fields.index'] });
};

export const getBioFromCMS = async (): Promise<BioEntry[]> => {
	try {
		const data = await getCMSData('bio');

		return data.items
			.map(item => item.fields)
			.map(({ content, title }) => ({
				content: getHTMLString(content as Document),
				title: title?.toString()
			}));
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getTitlesFromCMS = async (): Promise<string[]> => {
	try {
		const data = await getCMSData('titles');
		const content = data.items.map(item => item.fields).map(({ content }) => content as unknown as string[]);

		return content?.[0] ?? [];
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getArticlesFromCMS = async (): Promise<Article[]> => {
	try {
		const data = await getCMSData('article');

		return data.items.map(item => item.fields as Article) ?? [];
	} catch (error: unknown) {
		console.error(error);

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
					({ content, title, ...rest }) =>
						({
							...rest,
							content: getHTMLString(content as Document),
							title: getHTMLString(title as Document)
						}) as TimelineItem
				) ?? []
		);
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getResumeLinksFromCMS = async (): Promise<ResumeLink[]> => {
	try {
		const links = await getCMSData('resume link');

		return links.items.map(item => item.fields as ResumeLink) ?? [];
	} catch (error: unknown) {
		console.error(error);

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
		console.error(error);

		return {
			alt: '',
			image: '',
			index: 0,
			name: '',
			privateGitlabCalendar: {},
			summary: '',
			title: ''
		};
	}
};

export const getEducationFromCMS = async (): Promise<Education[]> => {
	try {
		const data = await getCMSData('education');

		return data.items.map(item => item.fields as Education);
	} catch (error: unknown) {
		console.error(error);

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
					image: `https:${(item.fields.image as Asset).fields.file?.url}`,
					pdf: `https:${(item.fields.pdf as Asset).fields.file?.url}`
				}) as Certificate
		);
	} catch (error: unknown) {
		console.error(error);

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
		console.error(error);

		return [];
	}
};

export const getResumeSkillsFromCMS = async (): Promise<ResumeSkills[]> => {
	try {
		const data = await getCMSData('resume skills');

		return data.items.map(item => item.fields as ResumeSkills);
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getStrengthsFromCMS = async (): Promise<Strength[]> => {
	try {
		const data = await getCMSData('strength');

		return data.items.map(item => item.fields as Strength);
	} catch (error: unknown) {
		console.error(error);

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
		console.error(error);

		return [];
	}
};

export const getSlidesFromCMS = async (): Promise<Slide[]> => {
	try {
		const data = await getCMSData('slide');

		return data.items.map(item => item.fields as Slide);
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getVideosFromCMS = async (): Promise<Video[]> => {
	try {
		const data = await getCMSData('video');

		return data.items.map(item => item.fields as Video);
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getPartnersFromCMS = async (): Promise<Partner[]> => {
	try {
		const data = await getCMSData('partner');

		return data.items.map(item => {
			const { image, index, name } = item.fields as CMSPartner;

			return {
				image: image.fields.file?.url as string,
				index,
				name
			};
		});
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getOccupationFromCMS = async (): Promise<ForceNode[]> => {
	try {
		const data = await getCMSData('occupation');

		return data.items.map(item => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { index, name, ...rest } = item.fields as Occupation;

			return {
				...rest,
				text: name
			};
		});
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getFundingFromCMS = async (): Promise<FundingNetwork[]> => {
	try {
		const data = await getCMSData('funding');

		return data.items.map(item => item.fields as FundingNetwork);
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getTestimonialsFromCMS = async (): Promise<Testimonial[]> => {
	try {
		const data = await getCMSData('testimonial');

		return data.items
			.map(item => {
				const { content, image, ...rest } = item.fields as CMSTestimonial;
				const imageURL = image.fields.file?.url;

				return {
					...rest,
					content: getHTMLString(content),
					image: `https://${imageURL}`
				};
			})
			.sort((a: Testimonial, b: Testimonial) => {
				const aDate = new Date(a.date);
				const bDate = new Date(b.date);

				if (aDate > bDate) {
					return 1;
				}

				if (aDate < bDate) {
					return -1;
				}

				return 0;
			});
	} catch (error: unknown) {
		console.error(error);

		return [];
	}
};

export const getGithubSkylineFromCMS = async (): Promise<GithubSkylineData | null> => {
	try {
		const data = await getCMSData('githubskyline');

		return data.items[0].fields as GithubSkylineData;
	} catch (error: unknown) {
		console.error(error);

		return null;
	}
};
