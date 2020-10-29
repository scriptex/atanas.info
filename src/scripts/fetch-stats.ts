#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';

import fetch, { Response, RequestInit } from 'node-fetch';

interface EndpointConfig {
	readonly url: string;
	readonly file: string;
	readonly init: RequestInit;
}

const ENDPOINTS: Record<string, EndpointConfig> = {
	npm: {
		url: 'https://api.npms.io/v2/search?q=maintainer:scriptex&size=100&from=0',
		init: {},
		file: './src/scripts/npm.json'
	},
	sourcerer: {
		url: 'https://sourcerer.io/api/face/user/profile/scriptex',
		init: {
			headers: {
				'Content-Type': 'application/octet-stream',
				External: 'yes'
			}
		},
		file: './src/scripts/sourcerer.txt'
	},
	codersrank: {
		url: 'https://api.codersrank.io/app/candidate/GetScore',
		init: {
			headers: {
				'content-type': 'application/json'
			},
			body: '{"username":"scriptex"}',
			method: 'POST'
		},
		file: './src/scripts/codersrank.json'
	}
};

const getData = async (endpoint: EndpointConfig, method = 'json'): Promise<any> => {
	return await fetch(endpoint.url, endpoint.init).then((r: Response) => (method === 'json' ? r.json() : r.text()));
};

(async () => {
	const { npm, sourcerer, codersrank } = ENDPOINTS;
	const npmData = await getData(npm);
	const sourcererData = await getData(sourcerer, 'text');
	const codersrankData = await getData(codersrank);

	// loadProfileData: function(e) {
	// 	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
	// 	return n.a.$b.face.get("/user/profile/" + e, t).then(function(e) {
	// 		return d.a.parse(e.data).to("ProfileResult")
	// 	}).then(m.a.from)
	// },

	writeFileSync(npm.file, JSON.stringify(npmData, null, 2));
	writeFileSync(sourcerer.file, sourcererData);
	writeFileSync(codersrank.file, JSON.stringify(codersrankData, null, 2));
})();
