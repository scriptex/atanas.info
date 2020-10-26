import * as React from 'react';
import 'scriptex-socials';

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
		</div>
	</footer>
);

export default Footer;
