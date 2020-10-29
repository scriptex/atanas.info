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

	const sourcerer = await fetch('https://sourcerer.io/api/face/user/profile/scriptex', {
		headers: {
			'Content-Type': 'application/octet-stream',
			External: 'yes'
		}
	}).then(r => r.arrayBuffer());

	// loadProfileData: function(e) {
	// 	var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
	// 	return n.a.$b.face.get("/user/profile/" + e, t).then(function(e) {
	// 		return d.a.parse(e.data).to("ProfileResult")
	// 	}).then(m.a.from)
	// },

	writeFileSync('./src/scripts/sourcerer.json', JSON.stringify(new Uint8Array(sourcerer), null, 2));
	writeFileSync('./src/scripts/codersrank.json', JSON.stringify(codersrank, null, 2));
})();
