import { ChangeEvent, FC, FormEvent, useCallback, useContext, useState } from 'react';

import { Button } from '@components';
import { AppContext } from '@data/context';
import { composeClassName } from '@scripts/shared';
import { Status } from '@scripts/types';

type Props = {
	initialStatus?: Status;
};

type ContactResult = {
	error?: {
		response: {
			body: {
				message: string;
			};
		};
	};
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
					body: JSON.stringify({ email, honeypot, message }),
					method: 'POST'
				});
				const result: ContactResult = await response.json();

				if (result.error) {
					setStatus(Status.ERROR);
					setErrorMessage(result.error.response?.body?.message || genericErrorMessage);
				} else {
					setStatus(Status.SUCCESS);
				}
			} catch (error: unknown) {
				console.error(error);

				setStatus(Status.ERROR);
				setErrorMessage(genericErrorMessage);
			}
		},
		[email, message]
	);

	return (
		<form className={composeClassName('c-contact', contactVisible ? ['visible'] : [])} onSubmit={onSubmit}>
			<Button
				className="c-contact__close"
				onClick={() => {
					setEmail('');
					setMessage('');
					setErrorMessage('');
					setStatus(Status.DEFAULT);
					setContactVisible(false);
				}}
				type="button"
				unstyled
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
								name="email"
								onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
								required
								type="email"
								value={email}
							/>
						</div>

						<div className="c-contact__field">
							<label htmlFor="message">Message:</label>

							<textarea
								cols={30}
								id="message"
								name="message"
								onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
								required
								rows={10}
								value={message}
							/>
						</div>

						<input name="field" type="hidden" value={honeypot} />
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
