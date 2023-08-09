import Image from 'next/image';
import type { FC } from 'react';

import certificate from '@data/lotties/certificate.json';
import { Certificate, certificates } from '@data/certificates';
import { Layout, Loader, Section, Animation, ExternalLink, Title } from '@components';

export const Certificates: FC = () => (
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
				{certificates.map((certificate: Certificate) => (
					<div className="o-grid__item xs-12 sm-6" key={certificate.name}>
						<ExternalLink href={`/cert/${certificate.type}.pdf`} className="c-certificate">
							<Loader />

							<Image
								src={`/cert/${certificate.type}.jpg`}
								alt={certificate.name}
								width="818"
								height="578"
								loading="lazy"
							/>
						</ExternalLink>
					</div>
				))}
			</div>
		</Section>
	</Layout>
);

export default Certificates;
