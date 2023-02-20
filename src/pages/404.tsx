import type { FC } from 'react';

import { Routes } from '@data/routes';
import { Button, EmptyPage } from '@components';

export const ErrorPage: FC = () => (
	<EmptyPage>
		<div className="c-error-page__content">
			<h1>404</h1>

			<p>Page not found</p>

			<Button href={Routes.HOME} type="link">
				Go to Home page
			</Button>
		</div>
	</EmptyPage>
);

export default ErrorPage;
