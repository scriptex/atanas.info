import * as React from 'react';

import github from '../../scripts/github-insights.json';
import gitlab from '../../scripts/gitlab-insights.json';
import {
	Svg,
	Head,
	Header,
	Footer,
	SectionHello,
	SectionAbout,
	SectionStats,
	SectionMusic,
	SectionSkills,
	SectionSocial,
	SectionSlides,
	SectionVideos,
	SectionPortfolio,
	SectionCertificates
} from '..';

export const App: React.FunctionComponent = () => (
	<>
		<Head />

		<Svg src="./sprite.svg" />

		<>
			<Header />

			<SectionHello />

			<SectionAbout />

			<SectionSkills />

			<SectionStats data={{ github, gitlab }} />

			<SectionPortfolio />

			<SectionSocial />

			<SectionSlides />

			<SectionVideos />

			<SectionMusic />

			<SectionCertificates />

			<Footer />
		</>
	</>
);

export default App;
