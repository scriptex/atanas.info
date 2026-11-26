import { timingSafeEqual } from 'node:crypto';

import type { NextApiRequest, NextApiResponse } from 'next';

import { refreshCMSData } from '@lib/cms-cache';

import { allCMSTypes, getArticlesFromCMS } from '@scripts/cms';

import { openSourceProjectsList } from '@data/open-source';
import { Routes } from '@data/routes';

// Pages are regenerated a few at a time so a full refresh finishes quickly
// without starting ~130 renders at once.
const CONCURRENCY = 8;

const isAuthorized = (req: NextApiRequest): boolean => {
	const secret = process.env.CMS_REFRESH_SECRET;
	const header = req.headers.authorization ?? '';
	const token = header.startsWith('Bearer ') ? header.slice('Bearer '.length) : '';

	if (!secret || !token) {
		return false;
	}

	const expected = Buffer.from(secret);
	const received = Buffer.from(token);

	return expected.length === received.length && timingSafeEqual(expected, received);
};

const getAllPaths = async (): Promise<string[]> => {
	const articles = await getArticlesFromCMS();
	const blogPosts = articles.filter(({ url }) => url?.startsWith(`${Routes.BLOG}/`)).map(({ url }) => url);
	const openSourceProjects = openSourceProjectsList.map(({ url }) => url);

	return [...new Set([...Object.values(Routes), ...blogPosts, ...openSourceProjects])];
};

const getRequestedPaths = (req: NextApiRequest): string[] => {
	const { path } = req.query;

	return Array.isArray(path) ? path : path ? [path] : [];
};

const revalidatePaths = async (
	res: NextApiResponse,
	paths: string[]
): Promise<{ failed: string[]; revalidated: string[] }> => {
	const failed: string[] = [];
	const revalidated: string[] = [];

	for (let index = 0; index < paths.length; index += CONCURRENCY) {
		await Promise.all(
			paths.slice(index, index + CONCURRENCY).map(async path => {
				try {
					await res.revalidate(path);
					revalidated.push(path);
				} catch (err) {
					console.error('Failed to revalidate %s', path, err);
					failed.push(path);
				}
			})
		);
	}

	return { failed, revalidated };
};

/**
 * Refreshes the cached Contentful data and regenerates the pages that use it.
 *
 * POST /api/cms-refresh
 * Authorization: Bearer <CMS_REFRESH_SECRET>
 *
 * Optional: ?path=/about&path=/resume regenerates only those pages
 * (the CMS cache is always refreshed in full).
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');

		return res.status(405).json({ error: 'Method not allowed' });
	}

	if (!isAuthorized(req)) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	try {
		const refreshFailed: string[] = [];

		for (const type of allCMSTypes) {
			try {
				await refreshCMSData(type);
			} catch (err) {
				console.error('Failed to refresh %s', type, err);
				refreshFailed.push(type);
			}
		}

		const allPaths = await getAllPaths();
		const requested = getRequestedPaths(req);

		// Only known pages can be regenerated; anything else is rejected outright.
		if (requested.some(path => !allPaths.includes(path))) {
			return res.status(400).json({ error: 'Unknown path' });
		}

		const paths = requested.length > 0 ? requested : allPaths;
		const { failed, revalidated } = await revalidatePaths(res, paths);

		return res.status(failed.length > 0 || refreshFailed.length > 0 ? 207 : 200).json({
			refreshed: allCMSTypes.filter(type => !refreshFailed.includes(type)),
			refreshFailed,
			revalidated,
			revalidateFailed: failed
		});
	} catch (err) {
		console.error(err);

		return res.status(500).json({ error: 'Failed to refresh content' });
	}
}
