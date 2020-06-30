import * as React from 'react';

import { socials, Social } from '../../scripts/socials';
import { ExternalLink, Icon } from '..';

export const Footer: React.FunctionComponent = () => (
	<footer className="c-footer">
		<div className="o-shell o-shell--flex">
			<p>
				&copy; {new Date().getFullYear()} Atanas Atanasov. <br className="visible-xs-block" />
				All rights reserved.
			</p>

			<nav className="c-socials">
				<ul>
					{socials.map((social: Social, index: number) => (
						<li key={index}>
							<ExternalLink href={social.url} title={social.title}>
								<Icon name={`svg-${social.icon}`} className={`c-svg-${social.icon}`}></Icon>
							</ExternalLink>
						</li>
					))}

					<li>
						<ExternalLink href="https://sourcerer.io/scriptex" title="See my profile on Sourcerer">
							<img
								src="https://sourcerer.io/icons/logo-sharing.svg"
								alt="Sourcerer brand image"
								width="32"
								loading="lazy"
							/>
						</ExternalLink>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
);

export default Footer;
