import { load } from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { GithubProfileData } from '@scripts/types';

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
	const emptyResponse: GithubProfileData = {
		markup: '',
		stylesheet: ''
	};

	try {
		const html = await fetch('https://github.com/scriptex').then(r => r.text());

		if (!html) {
			res.json(emptyResponse);
		}

		const $ = load(html);
		const markup = $('.js-yearly-contributions > div:first-child').html();
		const stylesheet = $('link[href*="profile"]').attr('href');

		if (!markup || !stylesheet) {
			res.json(emptyResponse);
		} else {
			res.json({
				markup,
				stylesheet
			});
		}
	} catch (e) {
		console.error(e);

		res.json(emptyResponse);
	}
}
