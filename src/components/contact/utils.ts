import type { FormEvent } from 'react';

export enum Status {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
	DEFAULT = 'DEFAULT'
}

export const onSubmit = (
	e: FormEvent<HTMLFormElement>,
	setStatus: (status: Status) => void,
	setErrorMessage: (message: string) => void
): void => {
	e.preventDefault();

	const form = e.target as HTMLFormElement;
	const data = new FormData(form);

	fetch(form.action, {
		method: form.method,
		headers: {
			Accept: 'application/json'
		},
		body: data
	})
		.then((r: Response) => r.json())
		.then((result: Record<string, string>) => {
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
};
