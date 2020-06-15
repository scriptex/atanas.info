import * as React from 'react';

import {
	Svg,
	Head,
	Header,
	Footer,
	SectionHello,
	SectionAbout,
	SectionStats,
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

			<Footer />
		</>
	</>
);

export default App;
