import Image from 'next/image';
import type { FC } from 'react';

import { partners } from '@data/partners';

export const Partners: FC = () => (
	<div className="c-partners">
		<div className="o-shell">
			<h2>Trusted by</h2>

			<ul>
				{partners.map(partner => (
					<li key={partner.index}>
						<Image
							src={partner.image}
							alt={`${partner.name} brand image`}
							title={partner.name}
							width={200}
							height={200}
						/>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Partners;
