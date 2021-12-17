import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import github from '../../data/github-insights.json';
import gitlab from '../../data/gitlab-insights.json';
import { Routes } from '../../data/routes';
import { Svg, Nav, Head, Header, Footer, Loader, Contact, ScrollToTop } from '..';
import {
	Home,
	Blog,
	About,
	Music,
	Stats,
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

// codebeat:disable[LOC]
export const App: React.FunctionComponent = () => {
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

					<Switch>
						<Route exact={true} path={Routes.HOME} component={Home} />
						<Route exact={true} path={Routes.ABOUT} component={About} />
						<Route exact={true} path={Routes.TIMELINE} component={Timeline} />
						<Route exact={true} path={Routes.SKILLS} component={Skills} />
						<Route exact={true} path={Routes.PORTFOLIO} component={Portfolio} />
						<Route exact={true} path={Routes.STATS} component={() => <Stats data={{ github, gitlab }} />} />
						<Route exact={true} path={Routes.SLIDES} component={Slides} />
						<Route exact={true} path={Routes.VIDEOS} component={Videos} />
						<Route exact={true} path={Routes.ARTICLES} component={Articles} />
						<Route exact={true} path={Routes.CERTIFICATES} component={Certificates} />
						<Route exact={true} path={Routes.SOCIAL} component={Social} />
						<Route exact={true} path={Routes.BLOG} component={Blog} />
						<Route exact={true} path={`${Routes.BLOG}/:slug`} component={BlogPost} />
						<Route exact={true} path={Routes.MUSIC} component={Music} />
						<Route exact={true} path={Routes.INTERACTIVE_RESUME} component={InteractiveResume} />
						<Route component={ErrorPage} />
					</Switch>

					<Nav hasShell={true} className="c-nav--inline" />

					<Footer />
				</AppContext.Provider>
			</React.Suspense>
		</Router>
	);
};
// codebeat:enable[LOC]

export default App;
