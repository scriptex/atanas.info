import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import github from '../../scripts/github-insights.json';
import gitlab from '../../scripts/gitlab-insights.json';
import { Routes } from '../../scripts/routes';
import { Svg, Nav, Head, Header, Footer, Contact, ScrollToTop } from '..';
import {
	Home,
	About,
	Skills,
	Slides,
	Social,
	Stats,
	Videos,
	Timeline,
	Articles,
	Portfolio,
	Certificates
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

			<React.Suspense
				fallback={
					<div className="c-loading">
						<div className="c-loader"></div>
					</div>
				}
			>
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
