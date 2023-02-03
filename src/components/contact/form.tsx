import Script from 'next/script';
import { FC, useEffect } from 'react';

import { waitForElement } from '@scripts/shared';

export const ContactForm: FC = () => {
	useEffect(() => {
		waitForElement('#g-recaptcha-response').then((el: Element | null) => {
			el?.setAttribute('required', 'required');
		});
	}, []);

	return (
		<>
			<Script src="https://www.google.com/recaptcha/api.js" />

			<h2>Send me your message</h2>

			<div className="c-contact__field">
				<label htmlFor="email">Email:</label>

				<input id="email" type="email" name="email" required />
			</div>

			<div className="c-contact__field">
				<label htmlFor="message">Message:</label>

				<textarea name="message" id="message" cols={30} rows={10} required />
			</div>

			<div className="g-recaptcha" data-sitekey="6LdYTk0kAAAAALhR23W9CoNliT4pQgQOLV4YcJbm" />
		</>
	);
};

export default ContactForm;
