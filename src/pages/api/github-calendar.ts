import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import type { NextApiRequest, NextApiResponse } from 'next';

import { GithubProfileData } from '@scripts/types';

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
	try {
		const httpLink = createHttpLink({
			uri: 'https://api.github.com/graphql'
		});

		const authLink = setContext((_, { headers }) => ({
			headers: {
				...headers,
				authorization: `Bearer ${process.env.GITHUB_TOKEN}`
			}
		}));

		const client = new ApolloClient({
			cache: new InMemoryCache(),
			link: authLink.concat(httpLink)
		});

		const {
			data: {
				user: {
					contributionsCollection: {
						contributionCalendar: { totalContributions, weeks }
					}
				}
			}
		} = await client.query({
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
