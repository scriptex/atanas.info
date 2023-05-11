import Head from 'next/head';
import type { FC } from 'react';

import { errorIcon } from '@data/error-icon';
import { Lines, Layout } from '@components';
import { ReactChildren } from '@scripts/types';

interface Props {
	children: ReactChildren;
}

export const EmptyPage: FC<Readonly<Props>> = ({ children }: Props) => (
	<Layout main="o-main--high">
		<Head>
			<title>Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<div className="c-error-page">
			<Lines />

			<div className="o-shell o-shell--flex">
				<svg width={380} height={500} viewBox="0 0 837 1045">
					<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						{errorIcon.map(options => (
							<path key={options.index} {...options} />
						))}
					</g>
				</svg>

				{children}
			</div>
		</div>
	</Layout>
);

export default EmptyPage;
