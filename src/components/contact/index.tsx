import * as React from 'react';

import { Button } from '..';
import { AppContext } from '../app';

enum Status {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
	DEFAULT = 'DEFAULT'
}

export const Contact: React.FunctionComponent = () => {
	const [status, setStatus] = React.useState(Status.DEFAULT);
	const [errorMessage, setErrorMessage] = React.useState('');
	const { contactVisible, setContactVisible } = React.useContext(AppContext);

	return (
		<form
			action="https://formspree.io/meqrwbvd"
			method="POST"
			className={`c-contact${contactVisible ? ' c-contact--visible' : ''}`}
			onSubmit={(e: any) => {
				e.preventDefault();

				const form: HTMLFormElement = e.target;
				const data = new FormData(form);

				fetch(form.action, {
					method: form.method,
					headers: {
						Accept: 'application/json'
					},
					body: data
				})
					.then((r: Response) => r.json())
					.then((result: any) => {
						if (result.error) {
							setStatus(Status.ERROR);
							setErrorMessage(result.error);
						} else {
							setStatus(Status.SUCCESS);
						}
					})
					.catch(() => {
						setStatus(Status.ERROR);
						setErrorMessage('Something went wrong. Please try again.');
					});
			}}
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
						<h4>I am currently not available for hire but you can still</h4>

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
