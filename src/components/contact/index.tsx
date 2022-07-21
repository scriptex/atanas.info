import * as React from 'react';

import { AppContext } from '../app';
import { onSubmit, Status } from './utils';
import { Button, ContactSuccess } from '..';

export const Contact: React.FC = () => {
	const [status, setStatus] = React.useState(Status.DEFAULT);
	const [errorMessage, setErrorMessage] = React.useState('');
	const { contactVisible, setContactVisible } = React.useContext(AppContext);

	return (
		<form
			action="https://formspree.io/meqrwbvd"
			method="POST"
			className={`c-contact${contactVisible ? ' c-contact--visible' : ''}`}
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e, setStatus, setErrorMessage)}
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
				{status === Status.SUCCESS ? null : <ContactSuccess />}

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
