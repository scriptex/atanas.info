import type { FC } from 'react';

import Image from 'next/image';

import type { Partner } from '@scripts/types';

type Props = {
	data: Partner[];
};

export const Partners: FC<Props> = ({ data = [] }: Props) =>
	data.length > 0 ? (
		<div className="c-partners">
			<div className="o-shell">
				<h2>Trusted by</h2>

				<ul>
					{data.map(partner =>
						partner.image ? (
							<li key={partner.index}>
								<Image
									alt={`${partner.name} brand image`}
									height={200}
									src={partner.image}
									title={partner.name}
									width={200}
								/>
							</li>
						) : null
					)}
				</ul>
			</div>
		</div>
	) : null;

export default Partners;
