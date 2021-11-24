import * as React from 'react';
import { Certificate, certificates } from '../../data/certificates';

import { Loader, Section, ExternalLink } from '..';

export const SectionCertificates: React.FunctionComponent = () => (
	<Section id="certificates" hasButton={true}>
		<h1>Certificates</h1>

		<div className="o-grid c-section__body">
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

export default SectionCertificates;
