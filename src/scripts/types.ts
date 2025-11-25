import type { ReactNode } from 'react';

import type { LastFMInsights } from '@insights/utils';

import type { WebProject } from '@data/projects';
import type { ForceNode } from '@data/skills-list';

import type {
	Article,
	Badge,
	BioEntry,
	Certificate,
	FundingNetwork,
	GithubSkylineData,
	OwnerDetails,
	ResumeData,
	Slide,
	Testimonial,
	TimelineItem,
	Video
} from './cms';

export type Nullable<T> = null | T;

export type Track = {
	metaData: {
		artist: string;
		title: string;
	};
	url: string;
};

export type GithubCount = {
	count: null | number;
};

export type GithubContribution = GithubCount & {
	user: string;
};

export type GithubRepository = {
	contributions: GithubContribution[];
	createdAt: string;
	fork: boolean;
	has_pages: boolean;
	issues: number;
	language: null | string;
	name: string;
	private: boolean;
	size: number;
	stargazers: number;
	updated_at: string;
	watchers: number;
};

export type GithubInsights = {
	calendar: Nullable<Record<string, GithubCount>>;
	error: boolean;
	general: Nullable<{
		createdAt: string;
		followers: number;
		following: number;
		privateGists: number;
		privateRepos: number;
		publicGists: number;
		publicRepos: number;
		updatedAt: string;
	}>;
	repositories: Nullable<GithubRepository[]>;
	updated: Nullable<number>;
};

export type GitlabRepository = {
	contributions: number;
	createdAt: string;
	fork: number;
	issues?: number;
	languages: Record<string, number | void>;
	name: string;
	owner: string;
	private: boolean;
	size?: number;
	stargazers: number;
	updated_at: string;
};

export type GitlabInsights = {
	calendar: Nullable<Record<string, number>>;
	error: boolean;
	general: Nullable<{
		createdAt: string;
		repos: number;
		updatedAt: string;
	}>;
	repositories: Nullable<GitlabRepository[]>;
	updated: Nullable<number>;
};

export type ReactChild = ReactNode | ReactNode[] | string;

export type ReactChildren = ReactChild | ReactChild[];

export enum Status {
	DEFAULT = 'DEFAULT',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS'
}

export type FormData = {
	email: string;
	honeypot: string;
	message: string;
};

export type GithubProfileData = {
	days?: Array<{
		count: number;
		date: string;
	}>;
	totalContributions?: number;
};

export type Package = {
	author: string;
	description: string;
	downloads: number;
	homepage: string;
	license: string;
	name: string;
	version: string;
};

export type Packages<T = Record<string, Package>> = {
	data: Record<string, Package> & T;
};

export type WithSum = {
	sum: number;
};

export type WithError = {
	error?: boolean;
};

export type Partner = {
	image?: string;
	index: number;
	name: string;
};

export type SharedPageProps = {
	funding: FundingNetwork[];
	partners: Partner[];
};

export type AboutPageProps = SharedPageProps & {
	bio: BioEntry[];
	owner: OwnerDetails;
};

export type ArticlesPageProps = SharedPageProps & {
	articles: Article[];
};

export type CertificatesPageProps = SharedPageProps & {
	badges: Badge[];
	data: Certificate[];
};

export type HomePageProps = SharedPageProps & {
	titles: string[];
};

export type InteractiveResumePageProps = SharedPageProps; //NOSONAR //NOSONAR

export type MusicPageProps = SharedPageProps & {
	data: Track[];
};

export type OccupationPageProps = SharedPageProps & {
	data: ForceNode[];
};

export type ResumePageData = SharedPageProps & {
	data: ResumeData;
};

export type SkillsPageData = SharedPageProps; //NOSONAR

export type SlidesPageData = SharedPageProps & {
	data: Slide[];
};

export type SocialPageData = SharedPageProps & {
	data: LastFMInsights;
};

export type TimelinePageData = SharedPageProps & {
	data: TimelineItem[];
};

export type VideosPageData = SharedPageProps & {
	data: Video[];
};

export type BlogPageData = SharedPageProps & {
	articles: Article[];
};

export type BlogPostPageData<T extends (...args: any) => any> = BlogPageData & {
	post: ReturnType<T>;
};

export type PortfolioAutomotiveAppsPageData = SharedPageProps; //NOSONAR

export type PortfolioEmailTemplatesPageData = SharedPageProps; //NOSONAR

export type PortfolioPageData = SharedPageProps; //NOSONAR

export type PortfolioMobileAppsPageData = SharedPageProps; //NOSONAR

export type PortfolioPersonalProjectsPageData = SharedPageProps; //NOSONAR

export type PortfolioWebAppsPageData = SharedPageProps & {
	data: WebProject[];
};

export type PortfolioOpenSourceProjectPageData = SharedPageProps & {
	post: Record<string, string>;
};

export type PortfolioOpenSourcePageData = SharedPageProps; //NOSONAR

export type GithubStatsPageData = SharedPageProps & {
	data: GithubInsights;
	githubSkyline: GithubSkylineData | null;
};

export type GitlabStatsPageData = SharedPageProps & {
	calendarData: Record<string, number>;
	data: GitlabInsights;
};

export type StatsPageData = SharedPageProps; //NOSONAR

export type NPMStatsPageProps = SharedPageProps & Packages<WithSum & WithError>;

export type OfflinePageProps = SharedPageProps; //NOSONAR

export type ErrorPageProps = SharedPageProps; //NOSONAR

export type TestimonialsPageProps = SharedPageProps & {
	data: Testimonial[];
};
