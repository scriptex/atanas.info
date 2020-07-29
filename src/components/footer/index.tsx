import * as React from 'react';
import 'scriptex-socials';

export const Footer: React.FunctionComponent = () => (
	<footer className="c-footer">
		<div className="o-shell o-shell--flex">
			<p>
				&copy; {new Date().getFullYear()} Atanas Atanasov. <br className="visible-xs-block" />
				All rights reserved.
			</p>

			<social-links></social-links>
		</div>
	</footer>
);

export default Footer;
