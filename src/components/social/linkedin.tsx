import type { FC } from 'react';

import Image from 'next/image';

import { ExternalLink } from '@components';

export const LinkedInBadge: FC = () => (
	<div className="linkedin-badge bubbles">
		<div className="linkedin-badge__content">
			<Image
				alt="Atanas Atanasov smiling dressed in a green t-shirt"
				height={240}
				loading="lazy"
				src="/images/temp/atanas.jpg"
				width={240}
			/>

			<h4>
				<ExternalLink href="https://linkedin.com/in/scriptex">👨💻 Atanas Atanasov</ExternalLink>
			</h4>

			<h5>Lead Front-end Engineer / E.ON Home Project @E.ON</h5>

			<h5>
				<ExternalLink href="https://www.linkedin.com/company/e-on">E.ON</ExternalLink> |
				<ExternalLink href="https://www.linkedin.com/school/university-of-economics-varna">
					University of Economics - Varna
				</ExternalLink>
			</h5>

			<ExternalLink className="c-btn c-btn--small" href="https://linkedin.com/in/scriptex">
				View profile
			</ExternalLink>
		</div>
	</div>
);

export default LinkedInBadge;
