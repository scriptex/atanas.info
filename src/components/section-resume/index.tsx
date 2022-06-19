import * as React from 'react';

import { Lines, Button, Section } from '..';

interface ResumeEntryProps {
	place: string;
	period: string;
}

export const ResumeEntry: React.FC<Readonly<ResumeEntryProps>> = ({ place, period }: ResumeEntryProps) => (
	<ul className="c-resume__list">
		<li>
			<i className="icon-calendar"></i>
			{period}
		</li>

		<li>
			<i className="icon-location"></i>
			{place}
		</li>
	</ul>
);

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
export const SectionResume: React.FC = () => (
	<Section
		id="resume"
		actions={
			<>
				<Button onClick={() => window.print()} className="c-btn--print">
					<i className="icon-print"></i> Print
				</Button>

				<Button type="link" href="/resume.pdf" download>
					<i className="icon-download"></i> Download
				</Button>
			</>
		}
		hasButton
	>
		<Lines />

		<div className="c-resume">
			<div className="c-resume__head">
				<strong>Resume</strong>
			</div>

			<div className="c-resume__title">
				<img src="images/temp/atanas.jpg" alt="Atanas Atanasov's profile picture" />

				<h1>Atanas Atanasov</h1>

				<h3>Senior Front-End Engineer</h3>

				<ul className="c-resume__list">
					<li>
						<i className="icon-mail"></i>
						hi@atanas.info
					</li>

					<li>
						<i className="icon-link"></i>
						https://atanas.info
					</li>

					<li>
						<i className="icon-link"></i>
						https://linkedin.com/in/scriptex
					</li>

					<li>
						<i className="icon-link"></i>
						https://github.com/scriptex
					</li>

					<li>
						<i className="icon-location"></i>
						Varna, Bulgaria
					</li>
				</ul>
			</div>

			<div className="c-resume__content">
				<div className="c-resume__block">
					<h2>Summary</h2>

					<p>
						A senior front-end engineer with more than 10 years of professional experience, striving to
						provide well tested and maintainable code, pixel-perfect user interfaces and the best user
						experience utilizing the latest and most recent technologies.
					</p>
				</div>

				<div className="c-resume__block">
					<h2>Education</h2>

					<p>
						<strong>Master in Marketing</strong>
					</p>

					<ResumeEntry place="University of Economics Varna" period="2003 - 2009" />
				</div>

				<div className="c-resume__block">
					<h2>Experience</h2>

					<div className="c-resume__experience">
						<h3>Lead Frontend Developer</h3>

						<h4>
							E.ON, E.ON Home project, <em>contract</em>
						</h4>

						<ResumeEntry place="Remote" period="Jul 2018 - Present" />

						<ul>
							<li>
								Implementing and maintaining the frontend of E.ON Home. Technologies used: React, React
								Native, Redux, TypeScript, SCSS, SVG, NodeJS, MS Azure, AWS and many more.
							</li>

							<li>
								Designing, implementing and maintaining the frontend of E.ON H.E.M.S. Technologies used:
								Angular, Redux, TypeScript, SCSS, SVG, NodeJS, MS Azure, AWS and many more.
							</li>

							<li>Leading a team of four front-end developers</li>
						</ul>
					</div>

					<div className="c-resume__experience">
						<h3>Senior JavaScript Developer</h3>

						<h4>
							3-11, <em>full-time</em>
						</h4>

						<ResumeEntry place="Varna, Bulgaria" period="Jan 2018 - Present" />

						<ul>
							<li>
								Leading a team of several senior front-end and full-stack developers in delivering
								high-end enterprise applications such as Emailio, XPND, Mbrella and others. Technologies
								used: React, Redux, TypeScript, SCSS, WordPress, NodeJS and many more.
							</li>

							<li>
								Implementing and maintaining the website for the first bulgarian electric sports car -
								Kinetik 07.
							</li>
						</ul>
					</div>

					<div className="c-resume__experience">
						<h3>Senior Software Developer</h3>

						<h4>
							Toptal, <em>freelance</em>
						</h4>

						<ResumeEntry place="Remote" period="Jun 2018 - Present" />

						<ul>
							<li>
								Working on closed-source client applications for companies from around the globe.
								Technologies used: Vue, React, Redux, TypeScript, SCSS, NodeJS,
							</li>

							<li>Part of the top 3% in the world.</li>
						</ul>
					</div>

					<div className="c-resume__experience">
						<h3>Senior JavaScript Developer</h3>

						<h4>
							2create, <em>full-time</em>
						</h4>

						<ResumeEntry place="Varna, Bulgaria" period="May 2012 - Jan 2018" />

						<ul>
							<li>Worked for brands such as htmlBurger and htmlBoutique.</li>

							<li>
								Designed, implemented, maintained and taught the internal coding standards used in tens
								of thousands of projects.
							</li>

							<li>
								Designed, implemented and maintained the internal frontend build system used in tens of
								thousands of projects.
							</li>

							<li>Mentored and led several front-end developer teams throughout the years. </li>

							<li>Published several articles.</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="c-resume__aside">
				<div className="c-resume__block">
					<h2>INDUSTRY SKILLS</h2>

					<ul className="c-resume__skills">
						<li>JavaScript</li>

						<li>TypeScript</li>

						<li>CSS</li>

						<li>SCSS</li>

						<li>HTML</li>

						<li>SVG</li>
					</ul>

					<ul className="c-resume__skills">
						<li>React</li>

						<li>Redux</li>

						<li>Angular</li>

						<li>Vue</li>

						<li>NodeJS</li>

						<li>Webpack</li>
					</ul>

					<ul className="c-resume__skills">
						<li>UI/UX</li>

						<li>SEO</li>

						<li>Accessibility (a11y)</li>

						<li>Internationalization (i18n)</li>

						<li>Testing</li>
					</ul>

					<ul className="c-resume__skills">
						<li>Scrum</li>

						<li>Agile</li>

						<li>Git</li>
					</ul>
				</div>

				<div className="c-resume__block">
					<h2>Strengths</h2>

					<ul className="c-resume__strengths">
						<li>
							<h4>
								<i className="icon-share"></i>
								Collaborative
							</h4>

							<p>
								I am always keen to share knowledge, help, discuss, teach and learn from others. I am
								able to collaborate with cross-functional teams to create a high-quality end product.
							</p>
						</li>

						<li>
							<h4>
								<i className="icon-star"></i>
								Result-oriented
							</h4>

							<p>
								Many confuse progress with moving in the right direction. I always make sure to check if
								the team is on the right path.
							</p>
						</li>

						<li>
							<h4>
								<i className="icon-brush"></i>
								Detail-oriented
							</h4>

							<p>Continuously focused on how to improve my work and do it the best way I can. </p>
						</li>

						<li>
							<h4>
								<i className="icon-clock"></i>
								Project management and prioritization
							</h4>

							<p>
								I am always making sure that project deadlines are met and the required results are
								delivered on time.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Section>
);
// codebeat:enable[ABC,LOC,BLOCK_NESTING]

export default SectionResume;
