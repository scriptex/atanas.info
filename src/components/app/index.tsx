import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import github from '../../data/github-insights.json';
import gitlab from '../../data/gitlab-insights.json';
import { Routes as AppRoutes } from '../../data/routes';
import { Svg, Nav, Head, Header, Footer, Loader, Contact, ScrollToTop } from '..';
import {
	Home,
	Blog,
	About,
	Music,
	Stats,
	Resume,
	Skills,
	Slides,
	Social,
	Videos,
	Timeline,
	Articles,
	BlogPost,
	ErrorPage,
	Portfolio,
	Certificates,
	InteractiveResume
} from '../../loadables';

export const AppContext = React.createContext({
	contactVisible: false,
	setContactVisible: (state: boolean) => state
});

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
export const App: React.FC = () => {
	const [contactVisible, setContactVisible] = React.useState(false);
	const value: any = { contactVisible, setContactVisible };

	return (
		<Router>
			<ScrollToTop />

			<React.Suspense fallback={<Loader />}>
				<AppContext.Provider value={value}>
					<Head />

					<Svg src="/sprite.svg" />

					<Header />

					<Contact />

					<Routes>
						<Route path={AppRoutes.HOME} element={<Home />} />
						<Route path={AppRoutes.ABOUT} element={<About />} />
						<Route path={AppRoutes.TIMELINE} element={<Timeline />} />
						<Route path={AppRoutes.SKILLS} element={<Skills />} />
						<Route path={AppRoutes.PORTFOLIO} element={<Portfolio />} />
						<Route path={AppRoutes.STATS} element={<Stats data={{ github, gitlab }} />} />
						<Route path={AppRoutes.SLIDES} element={<Slides />} />
						<Route path={AppRoutes.VIDEOS} element={<Videos />} />
						<Route path={AppRoutes.ARTICLES} element={<Articles />} />
						<Route path={AppRoutes.CERTIFICATES} element={<Certificates />} />
						<Route path={AppRoutes.SOCIAL} element={<Social />} />
						<Route path={AppRoutes.BLOG} element={<Blog />} />
						<Route path={`${AppRoutes.BLOG}/:slug`} element={<BlogPost />} />
						<Route path={AppRoutes.RESUME} element={<Resume />} />
						<Route path={AppRoutes.INTERACTIVE_RESUME} element={<InteractiveResume />} />
						<Route path={AppRoutes.MUSIC} element={<Music />} />
						<Route element={<ErrorPage />} />
					</Routes>

					<Nav hasShell={true} className="c-nav--inline" />

					<Footer />
				</AppContext.Provider>
			</React.Suspense>
		</Router>
	);
};
// codebeat:enable[ABC,LOC,BLOCK_NESTING]

export default App;
