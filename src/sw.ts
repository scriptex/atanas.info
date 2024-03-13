import { defaultCache } from '@serwist/next/browser';
import type { PrecacheEntry } from '@serwist/precaching';
import { installSerwist } from '@serwist/sw';

declare const self: ServiceWorkerGlobalScope & {
	__SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
};

installSerwist({
	clientsClaim: true,
	navigationPreload: true,
	precacheEntries: self.__SW_MANIFEST,
	runtimeCaching: defaultCache,
	skipWaiting: true
});
