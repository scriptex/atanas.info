import { FC, useState, useContext, FormEvent } from 'react';

import { Button } from '@components';
import { AppContext } from '@pages/_app';
import { ContactForm } from './form';
import { onSubmit, Status } from './utils';
import { composeClassName } from '@scripts/shared';

type Props = {
	initialStatus?: Status;
};

export const Contact: FC<Readonly<Props>> = ({ initialStatus = Status.DEFAULT }) => {
	const [status, setStatus] = useState(initialStatus);
	const [errorMessage, setErrorMessage] = useState('');
	const { contactVisible, setContactVisible } = useContext(AppContext);

	return (
		<form
			action="https://formspree.io/meqrwbvd"
			method="POST"
			onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e, setStatus, setErrorMessage)}
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
