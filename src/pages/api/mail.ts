import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { NextApiRequest, NextApiResponse } from 'next';

import { BrevoClient, BrevoError } from '@getbrevo/brevo';
import { TooManyRequestsError, UnauthorizedError } from '@getbrevo/brevo/dist/cjs/api';
import mjml2html from 'mjml';

import type { FormData } from '@scripts/types';

const brevo = new BrevoClient({
	apiKey: process.env.SENDINBLUE_API_KEY ?? ''
});

const emailTemplate = readFileSync(join(process.cwd(), 'email', 'contact.mjml'), 'utf8');

const interpolateTemplate = (template: string, vars: Record<string, string>): string => {
	let { html } = mjml2html(template);

	for (const prop in vars) {
		html = html.replaceAll(`{{ ${prop} }}`, vars[prop]);
	}

	return html;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	const data: FormData = JSON.parse(req.body);

	if (data?.honeypot !== process.env.NEXT_PUBLIC_HONEYPOT_VALUE) {
		return res.status(400).json({
			error: "It looks like you're not a human. Sorry!"
		});
	}

	// eslint-disable-next-line no-useless-assignment
	let result = {};

	const htmlContent = interpolateTemplate(emailTemplate, data);

	try {
		result = await brevo.transactionalEmails.sendTransacEmail({
			htmlContent: htmlContent,
			sender: { email: data.email },
			subject: 'New contact form submission from https://atanas.info',
			to: [{ email: 'hi@atanas.info' }]
		});

		return res.status(200).json(result);
	} catch (error) {
		result = { error };

		if (error instanceof UnauthorizedError) {
			console.error('Invalid API key');
		} else if (error instanceof TooManyRequestsError) {
			const retryAfter = (error.rawResponse?.headers as any)['retry-after'];

			console.error(`Rate limited. Retry after ${retryAfter} seconds`);
		} else if (error instanceof BrevoError) {
			console.error(`API Error ${error.statusCode}:`, error.message);
		}

		return res.status(400).json(result);
	}
}
