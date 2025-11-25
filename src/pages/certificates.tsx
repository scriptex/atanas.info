import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { format } from 'date-fns/format';

import { Animation, ExternalLink, Layout, Loader, Section, Title } from '@components';

import type { Badge, Certificate } from '@scripts/cms';
import { getBadgesFromCMS, getCertificatesFromCMS, getFundingFromCMS, getPartnersFromCMS } from '@scripts/cms';
import type { CertificatesPageProps } from '@scripts/types';

import certificate from '@data/lotties/certificate.json';

export const Certificates: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	badges,
	data,
	funding,
	partners
}) => (
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

			<header className="c-section__header c-section__header--alt">
				<h2>Badges</h2>
			</header>

			<div className="c-section__body o-grid">
				{badges.map((item: Badge) => (
					<div className="o-grid__item xs-12 sm-6 md-4" key={item.index}>
						<div className="c-badge">
							{item.image.fields.file?.url && (
								<ExternalLink href={item.url}>
									<Image
										alt=""
										height={300}
										src={item.image.fields.file.url.toString()}
										width={300}
									/>
								</ExternalLink>
							)}

							<h4>
								<ExternalLink href={item.url}>{item.title}</ExternalLink>
							</h4>

							<h5>
								Issued by <ExternalLink href={item.issuerUrl}>{item.issuer}</ExternalLink>
							</h5>

							<p>
								<em>Issued on {format(new Date(item.date), 'MMM dd, yyyy')}</em>
							</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<CertificatesPageProps> = async () => ({
	props: {
		badges: await getBadgesFromCMS(),
		data: await getCertificatesFromCMS(),
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	},
	revalidate: 86400
});

export default Certificates;
