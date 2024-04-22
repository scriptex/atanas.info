import { defaultCache } from '@serwist/next/worker';
import { PrecacheEntry, Serwist, SerwistGlobalConfig } from 'serwist';

declare global {
	interface WorkerGlobalScope extends SerwistGlobalConfig {
		__SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
	}
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
	clientsClaim: true,
	navigationPreload: true,
	precacheEntries: self.__SW_MANIFEST,
	runtimeCaching: defaultCache,
	skipWaiting: true
});

serwist.addEventListeners();
