import * as React from 'react';

export const ContactSuccess: React.FC = () => (
	<>
		<h2>Send me your message</h2>

		<div className="c-contact__field">
			<label htmlFor="email">Email:</label>

			<input id="email" type="email" name="email" required={true} />
		</div>

		<div className="c-contact__field">
			<label htmlFor="message">Message:</label>

			<textarea name="message" id="message" cols={30} rows={10} required={true}></textarea>
		</div>
	</>
);

export default ContactSuccess;
