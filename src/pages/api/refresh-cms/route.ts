import { NextResponse } from 'next/server';

import { refreshCMSData } from '@lib/cms-cache';
import { allCMSTypes } from '@scripts/cms';

export const POST = async () => {
	try {
		for (const type of allCMSTypes) {
			try {
				await refreshCMSData(type);
			} catch (err) {
				console.error(`Failed to refresh ${type}`, err);
			}
		}

		return NextResponse.json({ refreshed: true });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: 'Failed to refresh all content' }, { status: 500 });
	}
};
