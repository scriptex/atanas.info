import * as React from 'react';

import { useScript, waitForElement } from '@scripts/shared';

export const ContactForm: React.FC = () => {
	useScript('https://www.google.com/recaptcha/api.js', (script: HTMLScriptElement) => {
		script.defer = true;
	});

	React.useEffect(() => {
		waitForElement('#g-recaptcha-response').then((el: Element | null) => {
			el?.setAttribute('required', 'required');
		});
	}, []);

	return (
		<>
			<h2>Send me your message</h2>

			<div className="c-contact__field">
				<label htmlFor="email">Email:</label>

				<input id="email" type="email" name="email" required />
			</div>

			<div className="c-contact__field">
				<label htmlFor="message">Message:</label>

				<textarea name="message" id="message" cols={30} rows={10} required />
			</div>

			<div className="g-recaptcha" data-sitekey="6LeBnpkhAAAAAC-CeFw7NoOJMDifWeCeTulUuieB" />
		</>
	);
};

export default ContactForm;
