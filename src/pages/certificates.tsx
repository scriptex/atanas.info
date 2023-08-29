import Image from 'next/image';
import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import certificate from '@data/lotties/certificate.json';
import { Certificate, getCertificatesFromCMS } from '@scripts/cms';
import { Layout, Loader, Section, Animation, ExternalLink, Title } from '@components';

export const Certificates: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => (
	<Layout>
		<Title text="Certificates | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section
			id="certificates"
			title="Certificates"
			hasButton
			additionalElements={
				<Animation data={certificate} width={150} height={150} className="c-section__animation" />
			}
		>
			<div className="c-section__body o-grid">
				{data.map((item: Certificate) => (
					<div className="o-grid__item xs-12 sm-6" key={item.index}>
						<ExternalLink href={item.pdf} className="c-certificate">
							<Loader />
							<Image src={item.image} alt={item.title} width="818" height="578" loading="lazy" />
						</ExternalLink>
					</div>
				))}
			</div>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<{ data: Certificate[] }> = async () => ({
	props: {
		data: await getCertificatesFromCMS()
	}
});

export default Certificates;
