import fetch from 'node-fetch';
import { GitHubClient } from 'universal-github-client';
import { NowRequest, NowResponse } from '@vercel/node';

const client = new GitHubClient({
	base: 'https://api.github.com',
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	token: process.env.TOKEN!,
	fetch
});

export default async function (req: NowRequest, res: NowResponse): Promise<void> {
	const user = await client.get({ path: '/users/scriptex' });

	res.json(user);
}
