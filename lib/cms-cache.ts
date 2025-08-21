import { createClient } from 'contentful';

import { CMSType, RawCMSData } from '@scripts/cms';

import { getRedisClient } from './redis';

const contentfulClient = createClient({
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
	const contentTypes = await contentfulClient.getContentTypes();
	const content_type = contentTypes.items.find(item => item.name.toLowerCase() === type)?.sys.id;

	if (!content_type) {
		return {
			items: [],
			limit: 0,
			skip: 0,
			total: 0
		};
	}

	return await contentfulClient.getEntries({ content_type, order: ['fields.index'] });
}
