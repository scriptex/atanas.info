import * as React from 'react';
import { Certificate, certificates } from '../../scripts/certificates';

import { Section } from '..';
import ExternalLink from '../external-link';

export const SectionCertificates: React.FunctionComponent = () => (
	<Section id="certificates" hasButton={false}>
		<h1>Certificates</h1>

		<div className="o-grid c-section__body">
			{certificates.map((certificate: Certificate, index: number) => (
				<div className="o-grid__item o-grid__item--1of2" key={index}>
					<ExternalLink href={`certificates/${certificate.type}.pdf`} className="c-certificate">
						<img
							width="600"
							loading="lazy"
							src={`certificates/${certificate.type}.jpg`}
							alt={certificate.name}
						/>
					</ExternalLink>
				</div>
			))}
		</div>
	</Section>
);

export default SectionCertificates;
