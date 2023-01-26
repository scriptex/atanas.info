import { config as dotenvConfig } from 'dotenv';
import { MongoClient, MongoClientOptions, ServerApiVersion } from 'mongodb';

declare global {
	// eslint-disable-next-line no-var
	var _mongoClientPromise: Promise<MongoClient>;
}

dotenvConfig({
	path: '.env.local'
});

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = encodeURI(process.env.MONGODB_URI);
const options: MongoClientOptions = { serverApi: ServerApiVersion.v1 };

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}

	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export const queryNPM = { name: 'atanas-info-npm' };
export const queryGithub = { name: 'atanas-info-github' };
export const queryGitlab = { name: 'atanas-info-gitlab' };
export const queryLastFM = { name: 'atanas-info-last-fm' };
export const queryCloudinary = { name: 'atanas-info-cloudinary' };
export const queryScreenshots = { name: 'atanas-info-screenshots' };

export default clientPromise;
