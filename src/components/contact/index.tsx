import { FC, useState, useContext, ChangeEvent, FormEvent, useCallback } from 'react';

import { Button } from '@components';
import { AppContext } from '@pages/_app';
import { composeClassName } from '@scripts/shared';
import { Status, FormData } from '@scripts/types';

type Props = {
	initialStatus?: Status;
};

const honeypot = process.env.NEXT_PUBLIC_HONEYPOT_VALUE!;

export const Contact: FC<Readonly<Props>> = ({ initialStatus = Status.DEFAULT }) => {
	const [status, setStatus] = useState(initialStatus);
	const [errorMessage, setErrorMessage] = useState('');
	const { contactVisible, setContactVisible } = useContext(AppContext);

	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = useCallback(
		async (
			data: FormData,
			setStatus: (status: Status) => void,
			setErrorMessage: (message: string) => void
		): Promise<void> => {
			const genericErrorMessage = 'Something went wrong. Please try again.';

			await fetch('/api/mail', {
				method: 'POST',
				body: JSON.stringify(data)
			})
				.then((r: Response) => r.json())
				.then(result => {
					if (result.error) {
						setStatus(Status.ERROR);
						setErrorMessage(result.error?.response?.body?.message || genericErrorMessage);
					} else {
						setStatus(Status.SUCCESS);
					}
				})
				.catch(() => {
					setStatus(Status.ERROR);
					setErrorMessage(genericErrorMessage);
				});
		},
		[]
	);

	return (
		<form
			onSubmit={async (e: FormEvent): Promise<void> => {
				e.preventDefault();

				await onSubmit({ email, message, honeypot }, setStatus, setErrorMessage);
			}}
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
								name="message"
								id="message"
								cols={30}
								rows={10}
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
