import type { ReactNode } from 'react';

export type Nullable<T> = T | null;

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
