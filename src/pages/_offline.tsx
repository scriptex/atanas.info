import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { EmptyPage } from '@components';
import type { OfflinePageProps } from '@scripts/types';
import { getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';

export const OfflinePage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ funding, partners }) => (
	<EmptyPage funding={funding} partners={partners}>
		<div className="c-error-page__content">
			<h1>No internet</h1>

			<p>It looks like you&apos;re offline...</p>

			<p>Please connect to the internet and try again.</p>
		</div>
	</EmptyPage>
);

export const getStaticProps: GetStaticProps<OfflinePageProps> = async () => ({
	props: {
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default OfflinePage;
