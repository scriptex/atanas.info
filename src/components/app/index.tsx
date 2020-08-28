import * as React from 'react';

import github from '../../scripts/github-insights.json';
import gitlab from '../../scripts/gitlab-insights.json';
import {
	Svg,
	Head,
	Header,
	Footer,
	Contact,
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

export const AppContext = React.createContext({
	contactVisible: false,
	setContactVisible: (state: boolean) => state
});

export const App: React.FunctionComponent = () => {
	const [contactVisible, setContactVisible] = React.useState(false);
	const value: any = { contactVisible, setContactVisible };

	return (
		<AppContext.Provider value={value}>
			<Head />

			<Svg src="./sprite.svg" />

			<>
				<Header />

				<Contact />

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
		</AppContext.Provider>
	);
};

export default App;
