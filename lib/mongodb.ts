import { attachDatabasePool } from '@vercel/functions';
import { config as dotenvConfig } from 'dotenv';
import type { Document, Filter, MongoClientOptions } from 'mongodb';
import { MongoClient, ServerApiVersion } from 'mongodb';

declare global {
	var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export type Query = Filter<Document>;

dotenvConfig({
	path: '.env.local'
});

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = encodeURI(process.env.MONGODB_URI);
const options: MongoClientOptions = {
	// Close idle connections before MongoDB Atlas drops them while the function instance is paused.
	maxIdleTimeMS: 5000,
	serverApi: ServerApiVersion.v1,
	// Fail within a few seconds instead of the 30 s default, which can outlast the function itself.
	serverSelectionTimeoutMS: 5000
};

// One shared connection per function instance (and across HMR reloads in development).
// A failed attempt is forgotten so the next call reconnects, instead of every later call on this
// instance reusing the same rejected promise.
const connect = (): Promise<MongoClient> => {
	if (!global._mongoClientPromise) {
		const client = new MongoClient(uri, options);

		// Lets Vercel release idle pool connections before suspending the function instance.
		attachDatabasePool(client);

		global._mongoClientPromise = client.connect().catch((error: unknown) => {
			global._mongoClientPromise = undefined;

			throw error;
		});
	}

	return global._mongoClientPromise;
};

const clientPromise = connect();

// Connecting at import time is only a head start; getData() reconnects if it failed.
clientPromise.catch(() => undefined);

export const queryNPM: Query = { name: 'atanas-info-npm' };
export const queryMusic: Query = { name: 'atanas-info-music' };
export const queryGithub: Query = { name: 'atanas-info-github' };
export const queryGitlab: Query = { name: 'atanas-info-gitlab' };
export const queryLastFM: Query = { name: 'atanas-info-last-fm' };
export const queryCloudinary: Query = { name: 'atanas-info-cloudinary' };
export const queryScreenshots: Query = { name: 'atanas-info-screenshots' };

type MongoDBProps<T> = {
	props: {
		data: T;
	};
};

export const getData = async <T>(name: string, query: Query): Promise<MongoDBProps<T>> => {
	try {
		const client = await connect();
		const result = await client.db('All').collection(name).findOne(query);

		return {
			props: {
				data: result?.data as T
			}
		};
	} catch (error: unknown) {
		// One searchable line in the Vercel logs. Rethrown on purpose: a failed ISR regeneration
		// keeps serving the last good page, whereas returning empty data would replace it.
		console.error('[mongodb] getData failed for %s %s: %s', name, JSON.stringify(query), String(error));

		throw error;
	}
};

export default clientPromise;
