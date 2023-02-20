import type { FC } from 'react';

import Infographic from '@svg/braintrust-referral.svg';
import { Button } from '@components';

export const FooterReferral: FC = () => (
	<div className="c-footer__referral">
		<Infographic />

		<div>
			<h5>Access the world&apos;s best freelance jobs.</h5>

			<p>Your work. Your network. Your future.</p>

			<Button
				rel="noopener noreferrer"
				type="anchor"
				href="https://app.usebraintrust.com/r/atanas1/"
				target="_blank"
				variant="small"
			>
				Apply to Braintrust
			</Button>
		</div>
	</div>
);

export default FooterReferral;
