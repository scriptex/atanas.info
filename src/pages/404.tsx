import Link from 'next/link';
import type { FC } from 'react';

import { Routes } from '@data/routes';
import { errorIcon } from '@data/error-icon';
import { Lines, Layout } from '@components';

export const ErrorPage: FC = () => (
	<Layout main="o-main--high">
		<div className="c-error-page">
			<Lines />

			<div className="o-shell o-shell--flex">
				<svg width={380} height={500} viewBox="0 0 837 1045">
					<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						{errorIcon.map((props, i) => (
							<path key={i} {...props} />
						))}
					</g>
				</svg>

				<div className="c-error-page__content">
					<h1>404</h1>

					<p>Page not found</p>

					<Link href={Routes.HOME} className="c-btn">
						Go to Home page
					</Link>
				</div>
			</div>
		</div>
	</Layout>
);

export default ErrorPage;
