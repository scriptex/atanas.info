import * as React from 'react';
import TagManager from 'react-gtm-module';
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

const sendPageView = (route: Routes, title = ''): void => {
	TagManager.dataLayer({
		dataLayer: {
			send_to: process.env.GTM_ID,
			page_title: title,
			page_path: route,
			page_location: route
		}
	});
};

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
						<Route
							exact={true}
							path={Routes.HOME}
							render={() => {
								sendPageView(Routes.HOME, 'Home page');

								return <Home />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.ABOUT}
							render={() => {
								sendPageView(Routes.ABOUT, 'About page');

								return <About />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.TIMELINE}
							render={() => {
								sendPageView(Routes.TIMELINE, 'Timeline page');

								return <Timeline />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.SKILLS}
							render={() => {
								sendPageView(Routes.SKILLS, 'Skills page');

								return <Skills />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.PORTFOLIO}
							render={() => {
								sendPageView(Routes.PORTFOLIO, 'Portfolio page');

								return <Portfolio />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.STATS}
							render={() => {
								sendPageView(Routes.STATS, 'Stats page');

								return <Stats data={{ github, gitlab }} />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.SLIDES}
							render={() => {
								sendPageView(Routes.SLIDES, 'Slides page');

								return <Slides />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.VIDEOS}
							render={() => {
								sendPageView(Routes.VIDEOS, 'Videos page');

								return <Videos />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.ARTICLES}
							render={() => {
								sendPageView(Routes.ARTICLES, 'Articles page');

								return <Articles />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.CERTIFICATES}
							render={() => {
								sendPageView(Routes.CERTIFICATES, 'Certificates page');

								return <Certificates />;
							}}
						/>

						<Route
							exact={true}
							path={Routes.SOCIAL}
							render={() => {
								sendPageView(Routes.SOCIAL, 'Social page');

								return <Social />;
							}}
						/>
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
