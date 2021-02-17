import * as React from 'react';
import 'scriptex-socials';

import { updatedAt } from '../../scripts/updated-at';
import { formatDate } from '../section-stats';
import { ExternalLink } from '..';

export const Footer: React.FunctionComponent = () => (
	<footer className="c-footer">
		<div className="o-shell o-shell--flex">
			<p>
				&copy; {new Date().getFullYear()} Atanas Atanasov. <br className="visible-xs-block" />
				All rights reserved.
			</p>

			<social-links></social-links>
		</div>

		<div className="o-shell text-center">
			<small>Designed and developed by Atanas Atanasov.</small>

			<small>
				All code is licensed under{' '}
				<ExternalLink href="https://github.com/scriptex/atanas.info/blob/master/LICENSE">
					MIT license
				</ExternalLink>{' '}
				and available <ExternalLink href="https://github.com/scriptex/atanas.info/">on Github</ExternalLink>.
			</small>

			<small>Updated at {formatDate(updatedAt * 1000, 'dd MMM yyyy HH:mm:ss')}</small>

			<iframe
				src="https://github.com/sponsors/scriptex/button"
				title="Sponsor scriptex"
				width="116"
				height="35"
				style={{ border: 0 }}
				loading="lazy"
				frameBorder={0}
			></iframe>
		</div>
	</footer>
);

export default Footer;
