import * as React from 'react';

import certificate from '@data/lotties/certificate.json';
import { Certificate, certificates } from '@data/certificates';
import { Loader, Section, Animation, ExternalLink } from '@components';

export const Certificates: React.FC = () => (
	<Section
		id="certificates"
		title="Certificates"
		hasButton
		additionalElements={<Animation data={certificate} width={150} height={150} className="c-section__animation" />}
	>
		<div className="c-section__body o-grid">
			{certificates.map((certificate: Certificate, index: number) => (
				<div className="o-grid__item xs-12 sm-6" key={index}>
					<ExternalLink href={`cert/${certificate.type}.pdf`} className="c-certificate">
						<Loader />

						<img width="600" loading="lazy" src={`cert/${certificate.type}.jpg`} alt={certificate.name} />
					</ExternalLink>
				</div>
			))}
		</div>
	</Section>
);

export default Certificates;
