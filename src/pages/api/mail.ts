import mjml2html from 'mjml';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SendSmtpEmail, TransactionalEmailsApi } from '@sendinblue/client';

import { join } from 'path';
import { readFileSync } from 'fs';

import type { FormData } from '@scripts/types';

const sendSMTPEmail = new SendSmtpEmail();
const transactionalEmailsAPI = new TransactionalEmailsApi();

transactionalEmailsAPI['authentications']['apiKey'].apiKey = process.env.SENDINBLUE_API_KEY || '';

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

	let result = {};

	const htmlContent = interpolateTemplate(emailTemplate, data);

	sendSMTPEmail.to = [{ email: 'hi@atanas.info' }];
	sendSMTPEmail.sender = { email: data.email };
	sendSMTPEmail.subject = 'New contact form submission from https://atanas.info';
	sendSMTPEmail.htmlContent = htmlContent;

	try {
		result = await transactionalEmailsAPI.sendTransacEmail(sendSMTPEmail);

		return res.status(200).json(result);
	} catch (error) {
		result = { error };

		return res.status(400).json(result);
	}
}
