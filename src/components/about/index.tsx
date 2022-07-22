import * as React from 'react';

import { bio, BioEntry } from '../../data/bio';
import { Section, LastAbout } from '..';

export const About: React.FC = () => (
	<Section
		id="about"
		style={{ backgroundImage: 'url(/images/temp/desktop.jpg)' }}
		title="About me"
		className=" c-article fullsize-background"
		hasButton={true}
	>
		<img
			src="/images/temp/atanas.jpg"
			alt="Atanas Atanasov smiling dressed in a green t-shirt"
			width="240"
			height="240"
		/>

		{bio.map((item: BioEntry, i: number) => (
			<div className="c-article__block" key={i}>
				<h3>{item.title}</h3>

				{item.content.map((paragraph: string, j: number) => (
					<p key={j}>{paragraph}</p>
				))}
			</div>
		))}

		<LastAbout />
	</Section>
);

export default About;
