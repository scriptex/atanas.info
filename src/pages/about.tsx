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
						My <ExternalLink href="https://scriptex.js.org/">interactive resume</ExternalLink>, which is
						built using the{' '}
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
						was featured in the{' '}
						<ExternalLink href="https://codersrank.io/for-companies/">
							CodersRank candidate platform
						</ExternalLink>
						!!!
					</p>

					<span className="c-article__block-emoji">🎉 🎉 🎉</span>
				</div>

				{bio.map((item: BioEntry) => (
					<div className="c-article__block" key={item.title}>
						<h3>{item.title}</h3>

						{item.content.map((text: string) => (
							<p key={text}>{text}</p>
						))}
					</div>
				))}

				<div className="c-article__block">
					<h3>Current occupation</h3>

					<p>
						I am a Javascript/Typescript engineer with more than 10 years of professional experience who is
						currently working as:
					</p>

					<ul>
						<li>
							Lead front-end engineer in{' '}
							<strong>
								<ExternalLink href="https://www.eonenergy.com/">E.ON</ExternalLink>
							</strong>{' '}
							working on the{' '}
							<strong>
								<ExternalLink href="https://www.red-dot.org/project/eon-home-49256">
									award winning
								</ExternalLink>
							</strong>{' '}
							<strong>
								<ExternalLink href="https://www.eonenergy.com/energy-management.html">
									E.ON Home
								</ExternalLink>
							</strong>
							project.
						</li>

						<li>
							Senior software developer at{' '}
							<strong>
								<ExternalLink href="https://three-11.com/">Three11</ExternalLink>
							</strong>
							working with various clients such as Kinetik Automotive and Duke University.
						</li>

						<li>
							Part of &quot;the top 3% in the world&quot; at{' '}
							<strong>
								<ExternalLink href="https://www.toptal.com/resume/atanas-atanasov">Toptal</ExternalLink>
							</strong>
						</li>

						<li>
							Founding talent member at{' '}
							<strong>
								<ExternalLink href="https://app.usebraintrust.com/talent/782/">Braintrust</ExternalLink>
							</strong>
						</li>

						<li>
							Senior front-end engineer at{' '}
							<strong>
								<ExternalLink href="https://andela.com/">Andela</ExternalLink>
							</strong>
						</li>

						<li>
							Freelance Javascript/Typescript Engineer at{' '}
							<strong>
								<ExternalLink href="https://www.upwork.com/freelancers/~01736096283e1b5690">
									Upwork
								</ExternalLink>
							</strong>
						</li>

						<li>
							Freelance Javascript/Typescript Engineer at{' '}
							<strong>
								<ExternalLink href="https://www.freelancer.com/u/scriptexbg">Freelancer</ExternalLink>
							</strong>
						</li>

						<li>
							Freelance front-end engineer at{' '}
							<strong>
								<ExternalLink href="https://app.9am.works/talent/atanas-atanasov">9am</ExternalLink>
							</strong>
						</li>

						<li>
							Freelance front-end engineer at{' '}
							<strong>
								<ExternalLink href="https://wellfound.com/u/scriptex">Wellfound</ExternalLink>
							</strong>
						</li>

						<li>
							Senior front-end enginner at{' '}
							<strong>
								<ExternalLink href="https://pph.me/scriptex">People Per Hour</ExternalLink>
							</strong>
						</li>

						<li>
							Freelance front-end developer at{' '}
							<strong>
								<ExternalLink href="https://www.flexworkweb.com/@66374b3b">FlexWork</ExternalLink>
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

					<p>
						Last but not least, I have developed several Web Components all of which are published to{' '}
						<strong>
							<ExternalLink href="https://www.webcomponents.org/author/scriptex">
								WebComponents.org
							</ExternalLink>
						</strong>
					</p>
				</div>
			</Section>
		</Layout>
	);
};

export default About;
