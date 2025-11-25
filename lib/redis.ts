import { createClient } from 'redis';

let redisClient: null | ReturnType<typeof createClient> = null;

export async function getRedisClient() {
	if (!redisClient) {
		redisClient = createClient({
			url: process.env.REDIS_URL // e.g. "redis://:<password>@<host>:<port>"
		});

		redisClient.on('error', err => console.error('Redis Client Error', err));

		await redisClient.connect();
	}
	return redisClient;
}
