import Head from 'next/head';
import type { FC } from 'react';

import { errorIcon } from '@data/error-icon';
import { Lines, Layout } from '@components';

export const OfflinePage: FC = () => (
	<Layout main="o-main--high">
		<Head>
			<title>Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

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
					<h1>No internet</h1>

					<p>It looks like you&apos;re offline...</p>

					<p>Please connect to the internet and try again.</p>
				</div>
			</div>
		</div>
	</Layout>
);

export default OfflinePage;
