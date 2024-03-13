import type { FC } from 'react';

import { Animation, ExternalLink } from '@components';

import 'swiper/css';

type Props = {
	animation: unknown;
	button: string;
	href: string;
	subtitle: string;
	title: string;
};

export const Referral: FC<Readonly<Props>> = ({ animation, button, href, subtitle, title }) => (
	<div className="c-referral">
		<Animation className="c-referral__animation" data={animation} height={120} width={120} />

		<div className="c-referral__content">
			<h5>{title}</h5>

			<p>{subtitle}</p>

			<ExternalLink className="c-btn c-btn--small" href={href}>
				{button}
			</ExternalLink>
		</div>
	</div>
);

export default Referral;
