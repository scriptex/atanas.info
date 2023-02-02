import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { EmptyPage } from '@components';

export const ErrorPage: FC = () => (
	<EmptyPage>
		<div className="c-error-page__content">
			<h1>404</h1>

			<p>Page not found</p>

			<Link href={Routes.HOME} className="c-btn">
				Go to Home page
			</Link>
		</div>
	</EmptyPage>
);

export default ErrorPage;
