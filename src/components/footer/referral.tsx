import * as React from 'react';

import { ExternalLink } from '..';

export const FooterReferral: React.FC = () => (
	<div className="c-footer__referral">
		<img src="/images/temp/share-job-modal-infographic.svg" alt="" />

		<div>
			<h5>Access the world’s best freelance jobs.</h5>

			<p> Your work. Your network. Your future.</p>

			<ExternalLink href="https://app.usebraintrust.com/r/atanas1/" className="c-btn c-btn--small">
				Apply to Braintrust
			</ExternalLink>
		</div>
	</div>
);

export default FooterReferral;
