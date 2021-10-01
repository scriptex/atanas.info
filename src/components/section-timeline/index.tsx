import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { Icon, Section, ExternalLink } from '..';

export const WorkIcon = (): JSX.Element => <Icon name="svg-work" className="vertical-timeline__icon" />;
export const PersonalIcon = (): JSX.Element => <Icon name="svg-personal" className="vertical-timeline__icon" />;
export const EducationIcon = (): JSX.Element => <Icon name="svg-education" className="vertical-timeline__icon" />;

export const SectionTimeline: React.FunctionComponent = () => (
	<Section id="timeline" hasButton={true}>
		<h2>Timeline</h2>

		<VerticalTimeline>
			<VerticalTimelineElement date="March 1985" icon={<PersonalIcon />}>
				<h3 className="vertical-timeline-element-title">👶 I was born! 🎉</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Kardjali, Bulgaria</h4>
				<p>It was a cool tuesday afternoon - around 14:00 on the 12th day of March. My journey began!</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="August 2003" icon={<EducationIcon />}>
				<h3 className="vertical-timeline-element-title">
					🏫 I graduated <ExternalLink href="https://pgikj.com/">high school</ExternalLink>
				</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Kardjali, Bulgaria</h4>
				<p>This is when I left my home town and moved to Varna, Bulgaria to study. I still live here!</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="July 2007" icon={<EducationIcon />}>
				<h3 className="vertical-timeline-element-title">🎓 I got my bachelor degree in Marketing</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					I graduated from the{' '}
					<ExternalLink href="https://ue-varna.bg/">University of Economics in Varna</ExternalLink>
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="July 2008" icon={<EducationIcon />}>
				<h3 className="vertical-timeline-element-title">🎓 I got my master degree in Sales management</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					I graduated from the{' '}
					<ExternalLink href="https://ue-varna.bg/">University of Economics in Varna</ExternalLink>
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="October 2010" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">💻 I started learning web development</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					With enormous help from <ExternalLink href="https://marinatanasov.com/">my brother</ExternalLink> I
					started the path of the Web developer. My first steps included learning the basics of HTML and CSS.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="May 2012" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">👔 My first web development job 🎉</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					I applied and got accepted in one of the biggest outsourcing companies in Varna, Bulgaria - 2create,
					which operates globally and manages several famous web development brands like htmlBurger and
					htmlBoutique.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="April 2013" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">👨‍💻 Enter JavaScript</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					After one year of simple HTML/CSS web development I started learning and mastering the JavaScript
					programming language. It is my preferred language ever since and I love using and experimenting with
					it.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="July 2015" icon={<PersonalIcon />}>
				<h3 className="vertical-timeline-element-title">💒 I got married 🎊</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>I married my wonderful wife Zoya!</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="October 2015" icon={<PersonalIcon />}>
				<h3 className="vertical-timeline-element-title">👼 Stefan was born! 🍼</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					It was several minutes after midnight on a warm Sunday night when my older son Stefan was born. It
					was the most wonderful thing that ever happened in our lives. Our lives changed since then.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="November 2015" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">👨‍🏫 I became teacher and mentor</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					I was promoted and assigned the task to teach the junior web developers. My team consisted of around
					10 developers, a QA engineer and a project manager. I helped the rest of the developers with their
					daily tasks, taught them and mentored them. I did this until the early 2018.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="October 2017" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">🛠️ I created Jarvis!</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					Jarvis is the front-end development tool which helps hundreds of developers with their daily tasks -
					building, linting, formatting their code and many more. I implemented this utilizing the most recent
					technologies such as ES2015, NPM, Webpack and Gulp. This tool is used in hundreds of thousands of
					closes-source projects by clients from all over the world.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="January 2018" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">✨ I joined Three11!</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					I left 2create to join Three11 - a boutique web development company where we create the best user
					interfaces utilizing the most recent web technologies.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="June 2018" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">🔝 I joined Toptal as a freelancer!</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 remote</h4>
				<p>I was accepted amongst the top 3% of the developers in the world!</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="June 2018" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">🏢 I joined E.ON as a contactor!</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Essen, Germany</h4>
				<p>I started working with E.ON on their smart energy management application - E.ON Home.</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="November 2019" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">✔️ I joined Braintrust as a contactor!</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 remote</h4>
				<p>
					I was invited as a founding talent member of Braintrust - the first user-controlled talent network.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="November 2019" icon={<PersonalIcon />}>
				<h3 className="vertical-timeline-element-title">👼 Simeon was born! 🍼</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 Varna, Bulgaria</h4>
				<p>
					Just when I thought it couldn’t get any better, my second son was born! Simeon came and enlightened
					our days once more.
				</p>
			</VerticalTimelineElement>

			<VerticalTimelineElement date="September 2021" icon={<WorkIcon />}>
				<h3 className="vertical-timeline-element-title">✔️ I joined Andela as a contactor!</h3>
				<h4 className="vertical-timeline-element-subtitle">📍 remote</h4>
				<p>
					I became part of Andela - the talent network trusted by hundreds of the world’s top companies to
					help them seamlessly tap into global brilliance.
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	</Section>
);

export default SectionTimeline;
