import { FC, useState, useContext, ChangeEvent, FormEvent, useCallback } from 'react';

import { Button } from '@components';
import { Status } from '@scripts/types';
import { AppContext } from '@data/context';
import { composeClassName } from '@scripts/shared';

type Props = {
	initialStatus?: Status;
};

const honeypot = process.env.NEXT_PUBLIC_HONEYPOT_VALUE!;

export const Contact: FC<Readonly<Props>> = ({ initialStatus = Status.DEFAULT }) => {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState(initialStatus);
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { contactVisible, setContactVisible } = useContext(AppContext);

	const onSubmit = useCallback(
		async (e: FormEvent): Promise<void> => {
			e.preventDefault();

			const genericErrorMessage = 'Something went wrong. Please try again.';

			try {
				const response = await fetch('/api/mail', {
					method: 'POST',
					body: JSON.stringify({ email, message, honeypot })
				});
				const result = await response.json();

				if (result.error) {
					setStatus(Status.ERROR);
					setErrorMessage(result.error.response?.body?.message || genericErrorMessage);
				} else {
					setStatus(Status.SUCCESS);
				}
			} catch (e) {
				setStatus(Status.ERROR);
				setErrorMessage(genericErrorMessage);
			}
		},
		[email, message]
	);

	return (
		<form onSubmit={onSubmit} className={composeClassName('c-contact', contactVisible ? ['visible'] : [])}>
			<Button
				type="button"
				onClick={() => {
					setEmail('');
					setMessage('');
					setErrorMessage('');
					setStatus(Status.DEFAULT);
					setContactVisible(false);
				}}
				unstyled
				className="c-contact__close"
			>
				Close
			</Button>

			<div className="c-contact__body">
				{status === Status.SUCCESS ? null : (
					<>
						<h2>Send me your message</h2>

						<div className="c-contact__field">
							<label htmlFor="email">Email:</label>

							<input
								id="email"
								type="email"
								name="email"
								value={email}
								required
								onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
							/>
						</div>

						<div className="c-contact__field">
							<label htmlFor="message">Message:</label>

							<textarea
								id="message"
								cols={30}
								rows={10}
								name="message"
								value={message}
								required
								onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
							/>
						</div>

						<input type="hidden" name="field" value={honeypot} />
					</>
				)}

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
