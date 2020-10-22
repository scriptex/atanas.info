#!/usr/bin/env ts-node-script

import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

(async () => {
	const codersrank = await fetch('https://api.codersrank.io/app/candidate/GetScore', {
		headers: {
			'content-type': 'application/json'
		},
		body: '{"username":"scriptex"}',
		method: 'POST'
	}).then(r => r.json());

	const sourcerer = await fetch('https://sourcerer.io/api/face/user/profile/scriptex').then(r => r.text());

	writeFileSync('./test.txt', sourcerer);

	console.log(sourcerer);
	console.log(codersrank);
})();
