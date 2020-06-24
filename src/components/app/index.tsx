import * as React from 'react';

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

			<SectionStats />

			<SectionPortfolio />

			<SectionSlides />

			<SectionVideos />

			<SectionMusic />

			<Footer />
		</>
	</>
);

export default App;
