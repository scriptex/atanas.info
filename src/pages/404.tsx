import Link from 'next/link';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Routes } from '@data/routes';
import { EmptyPage } from '@components';
import type { Partner } from '@scripts/types';
import { getPartnersFromCMS } from '@scripts/cms';

export const ErrorPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => (
	<EmptyPage partners={partners}>
		<div className="c-error-page__content">
			<h1>404</h1>

			<p>Page not found</p>

			<Link href={Routes.HOME} className="c-btn">
				Go to Home page
			</Link>
		</div>
	</EmptyPage>
);

export const getStaticProps: GetStaticProps<{ partners: Partner[] }> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default ErrorPage;
