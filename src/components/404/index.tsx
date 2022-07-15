import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../data/routes';

export const ErrorPage: React.FC = () => (
	<div className="c-error-page">
		<div className="o-shell o-shell--flex">
			<svg width={380} height={500} viewBox="0 0 837 1045">
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<path
						d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
						stroke="#007FB2"
						strokeWidth="6"
					/>

					<path
						d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
						stroke="#EF4A5B"
						strokeWidth="6"
					/>

					<path
						d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
						stroke="#795D9C"
						strokeWidth="6"
					/>

					<path
						d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
						stroke="#F2773F"
						strokeWidth="6"
					/>

					<path
						d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
						stroke="#36B455"
						strokeWidth="6"
					/>
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
