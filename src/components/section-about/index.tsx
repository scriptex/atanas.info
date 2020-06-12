import * as React from 'react';

import { Section, ExternalLink } from '..';
import { bio, BioEntry } from '../../assets/scripts/bio';

export const SectionAbout: React.FunctionComponent = () => (
	<Section
		id="about"
		style={{ backgroundImage: 'url(images/temp/desktop.jpg)' }}
		className=" c-article fullsize-background"
		hasButton={true}
	>
		<h2>About me</h2>

		<img src="./images/temp/atanas.jpg" alt="" />

		{bio.map((item: BioEntry, i: number) => (
			<div className="c-article__block" key={i}>
				<h3>{item.title}</h3>
				{item.content.map((paragraph: string, j: number) => (
					<p key={j}>{paragraph}</p>
				))}
			</div>
		))}

		<div className="c-article__block">
			<h3>Connect with me</h3>

			<p>
				I am open for hire to work on your awesome idea. If you think I can help you, do not hesitate and{' '}
				<strong>
					<ExternalLink href="mailto:hi@atanas.info">drop me a line</ExternalLink>
				</strong>
				.
			</p>

			<p>
				I also like to contribute to open-source projects and I have created some myself. Feel free to contact
				me if you want to talk about your open-source projects or{' '}
				<strong>
					<ExternalLink href="https://github.com/scriptex">mine</ExternalLink>
				</strong>
				.
			</p>
		</div>
	</Section>
);

export default SectionAbout;
