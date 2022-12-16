import * as React from 'react';

import { onSubmit, Status } from './utils';
import { composeClassName } from '@scripts/shared';
import { Button, AppContext, ContactForm } from '@components';

export const Contact: React.FC = () => {
	const [status, setStatus] = React.useState(Status.DEFAULT);
	const [errorMessage, setErrorMessage] = React.useState('');
	const { contactVisible, setContactVisible } = React.useContext(AppContext);

	return (
		<form
			action="https://formspree.io/meqrwbvd"
			method="POST"
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e, setStatus, setErrorMessage)}
			className={composeClassName('c-contact', contactVisible ? ['visible'] : [])}
		>
			<button
				type="button"
				onClick={() => {
					setStatus(Status.DEFAULT);
					setContactVisible(false);
					setErrorMessage('');
				}}
				className="c-contact__close"
			>
				Close
			</button>

			<div className="c-contact__body">
				{status === Status.SUCCESS ? null : <ContactForm />}

				<div className="c-contact__actions">
					{status === Status.SUCCESS ? (
						<p className="c-contact__success">
							Thank you for your message! I will get in touch with you soon.
						</p>
					) : (
						<Button type="submit">Send message</Button>
					)}

					{status === Status.ERROR && <p className="c-contact__error">{errorMessage}</p>}
				</div>
			</div>
		</form>
	);
};

export default Contact;
