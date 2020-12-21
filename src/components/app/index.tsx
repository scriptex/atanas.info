import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import github from '../../scripts/github-insights.json';
import gitlab from '../../scripts/gitlab-insights.json';
import { Svg, Nav, Head, Header, Footer, Contact } from '..';
import {
	Home,
	About,
	Routes,
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
			<React.Suspense fallback={<div className="c-loading">Loading ...</div>}>
				<AppContext.Provider value={value}>
					<Head />

					<Svg src="/sprite.svg" />

					<Header />

					<Contact />

					<Switch>
						<Route exact={true} path={Routes.HOME} component={Home}></Route>

						<Route exact={true} path={Routes.ABOUT} component={About}></Route>

						<Route exact={true} path={Routes.TIMELINE} component={Timeline}></Route>

						<Route exact={true} path={Routes.SKILLS} component={Skills}></Route>

						<Route exact={true} path={Routes.PORTFOLIO} component={Portfolio}></Route>

						<Route
							exact={true}
							path={Routes.STATS}
							component={() => <Stats data={{ github, gitlab }} />}
						></Route>

						<Route exact={true} path={Routes.SLIDES} component={Slides}></Route>

						<Route exact={true} path={Routes.VIDEOS} component={Videos}></Route>

						<Route exact={true} path={Routes.ARTICLES} component={Articles}></Route>

						<Route exact={true} path={Routes.CERTIFICATES} component={Certificates}></Route>

						<Route exact={true} path={Routes.SOCIAL} component={Social}></Route>
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
