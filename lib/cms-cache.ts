import { createClient } from 'contentful';

import { CMSType, RawCMSData } from '@scripts/cms';

import { getRedisClient } from './redis';

const cfClient = createClient({
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
	space: process.env.CONTENTFUL_SPACE_ID!
});

const CACHE_TTL = 640000;

export async function getCMSData(type: CMSType): Promise<RawCMSData> {
	const redis = await getRedisClient();
	const cacheKey = `contentful:${type}`;
	const cached = await redis.get(cacheKey);

	if (cached) {
		return JSON.parse(cached);
	}

	const data = await fetchFromContentful(type);

	// Cache in Redis
	await redis.set(cacheKey, JSON.stringify(data), { EX: CACHE_TTL });

	return data;
}

export async function refreshCMSData(type: CMSType): Promise<RawCMSData> {
	const redis = await getRedisClient();
	const cacheKey = `contentful:${type}`;
	const data = await fetchFromContentful(type);

	await redis.set(cacheKey, JSON.stringify(data), { EX: CACHE_TTL });

	return data;
}

async function fetchFromContentful(type: CMSType): Promise<RawCMSData> {
	return await cfClient.getEntries({ content_type: type });
}
