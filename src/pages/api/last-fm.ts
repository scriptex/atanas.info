import type { NextApiRequest, NextApiResponse } from 'next';

import { lastFm } from '@insights/client';

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
	try {
		const result = await lastFm.userGetRecentTracks({ user: 'scriptex' });

		res.json(result);
	} catch (error: any) {
		console.error(error);

		res.json({
			error
		});
	}
}
