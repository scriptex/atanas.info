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

			<SectionMusic />

			<Footer />
		</>
	</>
);

export default App;
