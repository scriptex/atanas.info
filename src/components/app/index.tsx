import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { onThemeChange } from '../../scripts/shared';
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

export const routes = [
	{ path: AppRoutes.HOME, element: <Home /> },
	{ path: AppRoutes.ABOUT, element: <About /> },
	{ path: AppRoutes.TIMELINE, element: <Timeline /> },
	{ path: AppRoutes.SKILLS, element: <Skills /> },
	{ path: AppRoutes.PORTFOLIO, element: <Portfolio /> },
	{ path: AppRoutes.STATS, element: <Stats /> },
	{ path: AppRoutes.SLIDES, element: <Slides /> },
	{ path: AppRoutes.VIDEOS, element: <Videos /> },
	{ path: AppRoutes.ARTICLES, element: <Articles /> },
	{ path: AppRoutes.CERTIFICATES, element: <Certificates /> },
	{ path: AppRoutes.SOCIAL, element: <Social /> },
	{ path: AppRoutes.BLOG, element: <Blog /> },
	{ path: `${AppRoutes.BLOG}/:slug`, element: <BlogPost /> },
	{ path: AppRoutes.RESUME, element: <Resume /> },
	{ path: AppRoutes.INTERACTIVE_RESUME, element: <InteractiveResume /> },
	{ path: AppRoutes.MUSIC, element: <Music /> },
	{ path: '*', element: <ErrorPage /> }
];

type Theme = 'dark' | 'light';

export const setThemeClassName = (theme: Theme) => {
	const { classList } = document.documentElement;

	classList.remove('theme-dark');
	classList.remove('theme-light');
	classList.add(`theme-${theme}`);
};

setThemeClassName(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const App: React.FC = () => {
	const [contactVisible, setContactVisible] = React.useState(false);
	const value: any = { contactVisible, setContactVisible };

	React.useEffect(() => {
		onThemeChange(({ media, matches }) => {
			if (!matches) {
				return;
			}

			setThemeClassName(media.replace(/^\(prefers-color-scheme: (.*)\)$/, (_, match) => match) as Theme);
		});
	}, []);

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
						{routes.map((route, index) => (
							<Route {...route} key={index} />
						))}
					</Routes>

					<Nav hasShell={true} className="c-nav--inline" />

					<Footer />
				</AppContext.Provider>
			</React.Suspense>
		</Router>
	);
};

export default App;
