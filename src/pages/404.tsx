import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { EmptyPage } from '@components';
import type { ErrorPageProps } from '@scripts/types';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const ErrorPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<EmptyPage funding={funding} partners={partners}>
		<div className="c-error-page__content">
			<h1>404</h1>

			<p>Page not found</p>

			<Link href={Routes.HOME} className="c-btn">
				Go to Home page
			</Link>
		</div>
	</EmptyPage>
);

export const getStaticProps: GetStaticProps<ErrorPageProps> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default ErrorPage;
