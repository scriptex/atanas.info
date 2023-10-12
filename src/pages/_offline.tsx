import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { EmptyPage } from '@components';
import type { Partner } from '@scripts/types';
import { getPartnersFromCMS } from '@scripts/cms';

export const OfflinePage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ partners }) => (
	<EmptyPage partners={partners}>
		<div className="c-error-page__content">
			<h1>No internet</h1>

			<p>It looks like you&apos;re offline...</p>

			<p>Please connect to the internet and try again.</p>
		</div>
	</EmptyPage>
);

export const getStaticProps: GetStaticProps<{ partners: Partner[] }> = async () => ({
	props: {
		partners: await getPartnersFromCMS()
	}
});

export default OfflinePage;
