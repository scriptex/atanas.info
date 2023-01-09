export type Nullable<T> = T | null;

export interface GithubCount {
	count: number | null;
}

export interface GithubContribution extends GithubCount {
	user: string;
}

export interface GithubRepository {
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
}

export interface GithubInsights {
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
	updated: Nullable<string>;
	calendar: Nullable<Record<string, GithubCount>>;
	repositories: Nullable<GithubRepository[]>;
}

export interface GitlabRepository {
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
}

export interface GitlabInsights {
	error: boolean;
	general: Nullable<{
		repos: number;
		createdAt: string;
		updatedAt: string;
	}>;
	updated: Nullable<string>;
	calendar: Nullable<Record<string, number>>;
	repositories: Nullable<GitlabRepository[]>;
}
