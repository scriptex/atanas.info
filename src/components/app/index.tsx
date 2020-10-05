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
	SectionSkills,
	SectionSocial,
	SectionSlides,
	SectionVideos,
	SectionArticles,
	SectionPortfolio,
	SectionCertificates
} from '..';

export const AppContext = React.createContext({
	contactVisible: false,
	setContactVisible: (state: boolean) => state
});

// codebeat:disable[LOC]
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

				<SectionPortfolio />

				<SectionStats data={{ github, gitlab }} />

				<SectionSlides />

				<SectionVideos />

				<SectionArticles />

				<SectionCertificates />

				<SectionSocial />

				<Footer />
			</>
		</AppContext.Provider>
	);
};
// codebeat:enable[LOC]

export default App;
