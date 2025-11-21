import type { NextApiRequest, NextApiResponse } from 'next';

import { refreshCMSData } from '@lib/cms-cache';
import { allCMSTypes } from '@scripts/cms';

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
	try {
		for (const type of allCMSTypes) {
			try {
				await refreshCMSData(type);
			} catch (err) {
				console.error(`Failed to refresh ${type}`, err);
			}
		}

		return res.json({ refreshed: true });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: 'Failed to refresh all content' });
	}
}
