import Head from 'next/head';
import Image from 'next/image';
import type { FC } from 'react';

import book from '@data/lotties/book.json';
import { bio, BioEntry } from '@data/bio';
import { useNetworkState } from '@scripts/shared';
import { Layout, Section, Animation, ExternalLink, Icon } from '@components';

export const About: FC = () => {
	const online = useNetworkState();

	return (
		<Layout>
			<Head>
				<title>About | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
			</Head>

			<Section
				id="about"
				style={{ backgroundImage: 'url(/images/temp/desktop.jpg)' }}
				title="About me"
				className="c-article fullsize-background"
				hasButton
				additionalElements={<Animation data={book} width={200} height={200} className="c-section__animation" />}
			>
				{online ? (
					<Image
						src="/images/temp/atanas.jpg"
						alt="Atanas Atanasov smiling dressed in a green t-shirt"
						width={240}
						height={240}
						loading="lazy"
					/>
				) : (
					<Icon name="svg-disconnected " className="svg-disconnected" width={240} height={240} />
				)}

				<div className="c-article__block">
					<h3>Featured</h3>

					<span className="c-article__block-emoji">🎉 🎉 🎉</span>

					<p>
						My <ExternalLink href="https://scriptex.tk/">interactive resume</ExternalLink>, which is built
						using the{' '}
						<ExternalLink href="https://docs.codersrank.io/widgets/">CodersRank widgets</ExternalLink>, is
						featured in the{' '}
						<ExternalLink href="https://blog.codersrank.io/10-inspiring-developer-websites-and-profile-pages/">
							CodersRank blog
						</ExternalLink>{' '}
						!!!
					</p>

					<p>
						My{' '}
						<ExternalLink href="https://profile.codersrank.io/user/scriptex/">
							CodersRank profile
						</ExternalLink>{' '}
						is featured in the{' '}
						<ExternalLink href="https://codersrank.io/for-companies/">
							CodersRank candidate platform
						</ExternalLink>
						!!!
						<br />
						Feel free to check{' '}
						<ExternalLink href="https://codersrank.io/wp-content/uploads/2020/09/CR-search.mp4">
							the video
						</ExternalLink>{' '}
						out!
					</p>

					<span className="c-article__block-emoji">🎉 🎉 🎉</span>
				</div>

				{bio.map((item: BioEntry, i: number) => (
					<div className="c-article__block" key={i}>
						<h3>{item.title}</h3>

						{item.content.map((paragraph: string, j: number) => (
							<p key={j}>{paragraph}</p>
						))}
					</div>
				))}

				<div className="c-article__block">
					<h3>Current occupation</h3>

					<ul>
						<li>
							A Senior Javascript/Typescript engineer and front-end mentor at{' '}
							<strong>
								<ExternalLink href="https://github.com/three11">Three 11</ExternalLink>{' '}
							</strong>
							working on various boutique web applications including XPND, Kinetik Automotive and many
							more.
						</li>

						<li>
							A Lead front-end engineer at E.ON working on the{' '}
							<strong>
								<ExternalLink href="https://www.red-dot.org/project/eon-home-49256">
									award winning
								</ExternalLink>
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
						I am open for hire to work on your awesome idea. If you think I can help you, do not hesitate
						and{' '}
						<strong>
							<ExternalLink href="mailto:hi@atanas.info">drop me a line</ExternalLink>
						</strong>
						.
					</p>

					<p>
						I also like to contribute to open-source projects and I have created some myself. Feel free to
						contact me if you want to talk about your open-source projects or{' '}
						<strong>
							<ExternalLink href="https://github.com/scriptex">mine</ExternalLink>
						</strong>
						.
					</p>
				</div>
			</Section>
		</Layout>
	);
};

export default About;
