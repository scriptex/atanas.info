import * as React from 'react';

import { ExternalLink } from '@components';

export const FooterReferral: React.FC = () => (
	<div className="c-footer__referral">
		<img src="/images/temp/share-job-modal-infographic.svg" alt="" loading="lazy" />

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
