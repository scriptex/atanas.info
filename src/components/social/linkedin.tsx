import Image from 'next/image';
import type { FC } from 'react';

import { Button, ExternalLink } from '@components';

export const LinkedInBadge: FC = () => (
	<div className="linkedin-badge bubbles">
		<div className="linkedin-badge__content">
			<Image
				src="/images/temp/atanas.jpg"
				alt="Atanas Atanasov smiling dressed in a green t-shirt"
				width={240}
				height={240}
				loading="lazy"
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

			<Button href="https://linkedin.com/in/scriptex" type="anchor" variant="small">
				View profile
			</Button>
		</div>
	</div>
);

export default LinkedInBadge;
