import type { ReactNode } from 'react';

import type { LastFMInsights } from '@insights/utils';
import type { Article, BioEntry, Certificate, OwnerDetails, ResumeData, Slide, TimelineItem, Video } from './cms';
import { WebProject } from '@data/projects';

export type Nullable<T> = T | null;

export type Track = {
	url: string;
	metaData: {
		title: string;
		artist: string;
	};
};

export type GithubCount = {
	count: number | null;
};

export type GithubContribution = GithubCount & {
	user: string;
};

export type GithubRepository = {
	name: string;
	private: boolean;
	fork: boolean;
	createdAt: string;
	updated_at: string;
	size: number;
	stargazers: number;
	watchers: number;
	language: string | null;
	issues: number;
	contributions: GithubContribution[];
	has_pages: boolean;
};

export type GithubInsights = {
	error: boolean;
	general: Nullable<{
		publicRepos: number;
		privateRepos: number;
		publicGists: number;
		privateGists: number;
		followers: number;
		following: number;
		createdAt: string;
		updatedAt: string;
	}>;
	updated: Nullable<number>;
	calendar: Nullable<Record<string, GithubCount>>;
	repositories: Nullable<GithubRepository[]>;
};

export type GitlabRepository = {
	name: string;
	private: boolean;
	fork: number;
	createdAt: string;
	updated_at: string;
	size?: number;
	stargazers: number;
	languages: Record<string, number | void>;
	issues?: number;
	owner: string;
};

export type GitlabInsights = {
	error: boolean;
	general: Nullable<{
		repos: number;
		createdAt: string;
		updatedAt: string;
	}>;
	updated: Nullable<number>;
	calendar: Nullable<Record<string, number>>;
	repositories: Nullable<GitlabRepository[]>;
};

export type ReactChild = string | ReactNode | ReactNode[];

export type ReactChildren = ReactChild | ReactChild[];

export enum Status {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
	DEFAULT = 'DEFAULT'
}

export type FormData = {
	email: string;
	message: string;
	honeypot: string;
};

export type GithubProfileData = {
	markup?: string;
	stylesheet?: string;
};

export type Package = {
	name: string;
	version: string;
	description: string;
	license: string;
	homepage: string;
	author: string;
	downloads: number;
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
	name: string;
	index: number;
	image?: string;
};

export type SharedPageProps = {
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
	data: Certificate[];
};

export type HomePageProps = SharedPageProps & {
	titles: string[];
};

export type InteractiveResumePageProps = SharedPageProps; //NOSONAR //NOSONAR

export type MusicPageProps = SharedPageProps & {
	data: Track[];
};

export type OccupationPageProps = SharedPageProps; //NOSONAR

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
};

export type GitlabStatsPageData = SharedPageProps & {
	data: GitlabInsights;
	calendarData: Record<string, number>;
};

export type StatsPageData = SharedPageProps; //NOSONAR

export type NPMStatsPageProps = SharedPageProps & Packages<WithSum & WithError>;
