import type { FC } from 'react';

import Infographic from '@svg/braintrust-referral.svg';
import { ExternalLink } from '@components';

export const FooterReferral: FC = () => (
	<div className="c-footer__referral">
		<Infographic />

		<div>
			<h5>Access the world&apos;s best freelance jobs.</h5>

			<p>Your work. Your network. Your future.</p>

			<ExternalLink href="https://app.usebraintrust.com/r/atanas1/" className="c-btn c-btn--small">
				Apply to Braintrust
			</ExternalLink>
		</div>
	</div>
);

export default FooterReferral;
