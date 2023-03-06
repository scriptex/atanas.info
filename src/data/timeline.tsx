import type { FC } from 'react';

import { Icon, ExternalLink } from '@components';

export type TimelineItem = {
	date: string;
	icon: JSX.Element;
	title: JSX.Element;
	location: string;
	content: JSX.Element;
};

export const WorkIcon: FC = () => <Icon name="svg-work" className="vertical-timeline__icon" />;
export const PersonalIcon: FC = () => <Icon name="svg-personal" className="vertical-timeline__icon" />;
export const EducationIcon: FC = () => <Icon name="svg-education" className="vertical-timeline__icon" />;

export const timelineItems: TimelineItem[] = [
	{
		date: 'March 1985',
		icon: <PersonalIcon />,
		title: <>👶 I was born! 🎉</>,
		location: '📍 Kardjali, Bulgaria',
		content: <>It was a cool tuesday afternoon - around 14:00 on the 12th day of March. My journey began!</>
	},
	{
		date: 'August 2003',
		icon: <EducationIcon />,
		title: (
			<>
				🏫 I graduated <ExternalLink href="https://pgikj.com/">high school</ExternalLink>
			</>
		),
		location: '📍 Kardjali, Bulgaria',
		content: <>This is when I left my home town and moved to Varna, Bulgaria to study. I still live here!</>
	},
	{
		date: 'July 2007',
		icon: <EducationIcon />,
		title: <>🎓 I got my bachelor degree in Marketing</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				I graduated from the{' '}
				<ExternalLink href="https://ue-varna.bg/">University of Economics in Varna</ExternalLink>
			</>
		)
	},
	{
		date: 'July 2008',
		icon: <EducationIcon />,
		title: <>🎓 I got my master degree in Sales management</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				I graduated from the{' '}
				<ExternalLink href="https://ue-varna.bg/">University of Economics in Varna</ExternalLink>
			</>
		)
	},
	{
		date: 'October 2010',
		icon: <WorkIcon />,
		title: <>💻 I started learning web development</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				With enormous help from <ExternalLink href="https://marinatanasov.com/">my brother</ExternalLink> I
				started the path of the Web developer. My first steps included learning the basics of HTML and CSS.
			</>
		)
	},
	{
		date: 'May 2012',
		icon: <WorkIcon />,
		title: <>👔 My first web development job 🎉</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				I applied and got accepted in one of the biggest outsourcing companies in Varna, Bulgaria - 2create,
				which operates globally and manages several famous web development brands like htmlBurger and
				htmlBoutique.
			</>
		)
	},
	{
		date: 'April 2013',
		icon: <WorkIcon />,
		title: <>👨‍💻 Enter Javascript</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				After one year of simple HTML/CSS web development I started learning and mastering the Javascript
				programming language. It is my preferred language ever since and I love using and experimenting with it.
			</>
		)
	},
	{
		date: 'July 2015',
		icon: <PersonalIcon />,
		title: <>💒 I got married 🎊</>,
		location: '📍 Varna, Bulgaria',
		content: <>I married my wonderful wife Zoya!</>
	},
	{
		date: 'October 2015',
		icon: <PersonalIcon />,
		title: <>👼 Stefan was born! 🍼</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				It was several minutes after midnight on a warm Sunday night when my older son Stefan was born. It was
				the most wonderful thing that ever happened in our lives. Our lives changed since then.
			</>
		)
	},
	{
		date: 'November 2015',
		icon: <WorkIcon />,
		title: <>👨‍🏫 I became teacher and mentor</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				I was promoted and assigned the task to teach the junior web developers. My team consisted of around 10
				developers, a QA engineer and a project manager. I helped the rest of the developers with their daily
				tasks, taught them and mentored them. I did this until the early 2018.
			</>
		)
	},
	{
		date: 'October 2017',
		icon: <WorkIcon />,
		title: <>🛠️ I created Jarvis!</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				Jarvis is the front-end development tool which helps hundreds of developers with their daily tasks -
				building, linting, formatting their code and many more. I implemented this utilizing the most recent
				technologies such as ES2015, NPM, Webpack and Gulp. This tool is used in hundreds of thousands of
				closes-source projects by clients from all over the world.
			</>
		)
	},
	{
		date: 'January 2018',
		icon: <WorkIcon />,
		title: <>✨ I joined Three11!</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				I left 2create to join Three11 - a boutique web development company where we create the best user
				interfaces utilizing the most recent web technologies.
			</>
		)
	},
	{
		date: 'June 2018',
		icon: <WorkIcon />,
		title: <>🔝 I joined Toptal as a freelancer!</>,
		location: '📍 remote',
		content: <>I was accepted amongst the top 3% of the developers in the world!</>
	},
	{
		date: 'June 2018',
		icon: <WorkIcon />,
		title: <>🏢 I joined E.ON as a contactor!</>,
		location: '📍 Essen, Germany',
		content: <>I started working with E.ON on their smart energy management application - E.ON Home.</>
	},
	{
		date: 'November 2019',
		icon: <WorkIcon />,
		title: <>✔️ I joined Braintrust as a contactor!</>,
		location: '📍 remote',
		content: (
			<>I was invited as a founding talent member of Braintrust - the first user-controlled talent network.</>
		)
	},
	{
		date: 'November 2019',
		icon: <PersonalIcon />,
		title: <>👼 Simeon was born! 🍼</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				Just when I thought it couldn’t get any better, my second son was born! Simeon came and enlightened our
				days once more.
			</>
		)
	},
	{
		date: 'September 2021',
		icon: <WorkIcon />,
		title: <>✔️ I joined Andela as a contactor!</>,
		location: '📍 remote',
		content: (
			<>
				I became part of Andela - the talent network trusted by hundreds of the world’s top companies to help
				them seamlessly tap into global brilliance.
			</>
		)
	},
	{
		date: 'Jan 2023',
		icon: <WorkIcon />,
		title: <>✔️ I joined Kinetik Automotive as a part-time frontend developer!</>,
		location: '📍 Varna, Bulgaria',
		content: (
			<>
				I started working with the automotive industry and participated in building dashboards and infotainment
				systems for electric vehicles as well as a variety of web applications. Some of them are the first
				Bulgarian electric car (
				<ExternalLink href="https://kinetikautomotive.com/kinetik-07-prototype/">Kinetik Model 07</ExternalLink>
				) and the <ExternalLink href="https://kinetikautomotive.com/kes/">Kinetik Model 27</ExternalLink>{' '}
				electric kart.
			</>
		)
	}
];
