import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { LocalState } from '@apollo/client/local-state';
import type { NextApiRequest, NextApiResponse } from 'next';

import { GithubProfileData } from '@scripts/types';

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
	try {
		const httpLink = new HttpLink({
			uri: 'https://api.github.com/graphql'
		});

		const authLink = new SetContextLink(() => ({
			headers: {
				authorization: `Bearer ${process.env.GITHUB_TOKEN}`
			}
		}));

		const client = new ApolloClient({
			cache: new InMemoryCache(),
			link: authLink.concat(httpLink),
			localState: new LocalState({})
		});

		const {
			data: {
				user: {
					contributionsCollection: {
						contributionCalendar: { totalContributions, weeks }
					}
				}
			}
		} = await client.query<any>({
			query: gql`
				{
					user(login: "scriptex") {
						contributionsCollection {
							contributionCalendar {
								totalContributions
								weeks {
									contributionDays {
										contributionCount
										contributionLevel
										date
									}
								}
							}
						}
					}
				}
			`
		});

		const levels = ['FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'];

		const result: GithubProfileData = {
			days: weeks.reduce(
				(list: Array<GithubProfileData['days']>, item: any) => [
					...list,
					...item.contributionDays.map((day: any) => ({
						count: day.contributionCount,
						date: day.date,
						level: levels.findIndex(item => item === day.contributionLevel) + 1
					}))
				],
				[]
			),
			totalContributions
		};

		res.json(result);
	} catch (e) {
		console.error(e);

		res.json({});
	}
}
