import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { EmptyPage } from '@components';
import { Routes } from '@data/routes';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { ErrorPageProps } from '@scripts/types';

export const ErrorPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<EmptyPage funding={funding} partners={partners}>
		<div className="c-error-page__content">
			<h1>404</h1>

			<p>Page not found</p>

			<Link className="c-btn" href={Routes.HOME}>
				Go to Home page
			</Link>
		</div>
	</EmptyPage>
);

export const getStaticProps: GetStaticProps<ErrorPageProps> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default ErrorPage;
