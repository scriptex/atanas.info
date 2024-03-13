import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { Animation, ExternalLink, Layout, Loader, Section, Title } from '@components';
import { Certificate, getCertificatesFromCMS, getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { CertificatesPageProps } from '@scripts/types';

import certificate from '@data/lotties/certificate.json';

export const Certificates: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Certificates" />

		<Section
			additionalElements={
				<Animation className="c-section__animation" data={certificate} height={150} width={150} />
			}
			hasButton
			id="certificates"
			title="Certificates"
		>
			<div className="c-section__body o-grid">
				{data.map((item: Certificate) => (
					<div className="o-grid__item xs-12 sm-6" key={item.index}>
						<ExternalLink className="c-certificate" href={item.pdf}>
							<Loader />
							<Image alt={item.title} height="578" loading="lazy" src={item.image} width="818" />
						</ExternalLink>
					</div>
				))}
			</div>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<CertificatesPageProps> = async () => ({
	props: {
		data: await getCertificatesFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Certificates;
