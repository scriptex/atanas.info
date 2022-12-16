import * as React from 'react';

import { ExternalLink } from '@components';

export const LastAbout: React.FC = () => (
	<div className="c-article__block">
		<h3>Current occupation</h3>

		<ul>
			<li>
				A Senior Javascript/Typescript engineer and front-end mentor at{' '}
				<strong>
					<ExternalLink href="https://github.com/three11">Three 11</ExternalLink>{' '}
				</strong>
				working on various boutique web applications including XPND, Kinetik Automotive and many more.
			</li>

			<li>
				A Lead front-end engineer at E.ON working on the{' '}
				<strong>
					<ExternalLink href="https://www.red-dot.org/project/eon-home-49256">award winning</ExternalLink>
				</strong>{' '}
				web and mobile smart energy management application E.ON Home.
			</li>

			<li>
				A Senior software developer at{' '}
				<strong>
					<ExternalLink href="https://www.toptal.com/resume/atanas-atanasov">Toptal</ExternalLink>
				</strong>
			</li>

			<li>
				A Founding member and Senior Javascript/Typescript engineer at{' '}
				<strong>
					<ExternalLink href="https://app.usebraintrust.com/talent/782/">Braintrust</ExternalLink>
				</strong>
			</li>

			<li>
				A Senior Javascript/Typescript engineer at{' '}
				<strong>
					<ExternalLink href="https://andela.com/">Andela</ExternalLink>
				</strong>
			</li>

			<li>
				A Senior Frontend engineer at{' '}
				<strong>
					<ExternalLink href="https://app.9am.works/hire/atanas-atanasov">9AM</ExternalLink>
				</strong>
			</li>
		</ul>

		<br />

		<h3>Connect with me</h3>

		<p>
			I am open for hire to work on your awesome idea. If you think I can help you, do not hesitate and{' '}
			<strong>
				<ExternalLink href="mailto:hi@atanas.info">drop me a line</ExternalLink>
			</strong>
			.
		</p>

		<p>
			I also like to contribute to open-source projects and I have created some myself. Feel free to contact me if
			you want to talk about your open-source projects or{' '}
			<strong>
				<ExternalLink href="https://github.com/scriptex">mine</ExternalLink>
			</strong>
			.
		</p>
	</div>
);

export default LastAbout;
