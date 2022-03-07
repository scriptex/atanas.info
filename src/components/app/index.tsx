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

export const enum Theme {
	DARK = 'dark',
	LIGHT = 'light'
}

export const AppContext = React.createContext({
	theme: 'dark',
	setTheme: (value: Theme) => {
		console.log(value);
	},
	contactVisible: false,
	setContactVisible: (value: boolean) => {
		console.log(value);
	}
});

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
export const App: React.FunctionComponent = () => {
	const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
	const [contactVisible, setContactVisible] = React.useState(false);

	React.useEffect(() => {
		document.documentElement.classList.add(theme === Theme.DARK ? 'dark' : 'light');

		return () => {
			document.documentElement.classList.remove('dark', 'light');
		};
	}, [theme]);

	return (
		<Router>
			<ScrollToTop />

			<React.Suspense fallback={<Loader />}>
				<AppContext.Provider value={{ theme, setTheme, contactVisible, setContactVisible }}>
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
						<Route exact={true} path={Routes.RESUME} component={Resume} />
						<Route exact={true} path={Routes.INTERACTIVE_RESUME} component={InteractiveResume} />
						<Route exact={true} path={Routes.MUSIC} component={Music} />
						<Route component={ErrorPage} />
					</Switch>

					<Nav hasShell={true} className="c-nav--inline" />

					<Footer />
				</AppContext.Provider>
			</React.Suspense>
		</Router>
	);
};
// codebeat:enable[ABC,LOC,BLOCK_NESTING]

export default App;
