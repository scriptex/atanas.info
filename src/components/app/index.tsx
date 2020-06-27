import * as React from 'react';

import github from '../../assets/scripts/github-insights.json';
import gitlab from '../../assets/scripts/gitlab-insights.json';
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
	SectionSlides,
	SectionVideos,
	SectionPortfolio
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

			<SectionSlides />

			<SectionVideos />

			<SectionMusic />

			<Footer />
		</>
	</>
);

export default App;
