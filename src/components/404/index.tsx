import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@data/routes';
import { errorIcon } from '@data/error-icon';

export const ErrorPage: React.FC = () => (
	<div className="c-error-page">
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

				<Link to={Routes.HOME} className="c-btn">
					Go to Home page
				</Link>
			</div>
		</div>
	</div>
);

export default ErrorPage;
