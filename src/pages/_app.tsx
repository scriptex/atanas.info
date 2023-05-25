import { Global } from '@emotion/react';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { FC, useMemo, useState, useEffect, createContext } from 'react';

import { Head } from '@components';
import { globalStyles } from '@scripts/styles';
import { Theme, onThemeChange, setThemeClassName } from '@scripts/shared';

import 'itcss/main.css';
import 'slick-carousel/slick/slick.css';
import 'react-vertical-timeline-component/style.min.css';
import 'react-round-carousel/dist/index.css';
import 'prismjs/themes/prism-tomorrow.css';

import '@styles/index.css';

type ExtendedAppProps = AppProps & { Component: any };

export const AppContext = createContext({
	contactVisible: false,
	setContactVisible: (state: boolean) => state
});

export const App: FC<ExtendedAppProps> = ({ Component, pageProps }: ExtendedAppProps) => {
	const [contactVisible, setContactVisible] = useState(false);
	const value: any = useMemo(() => ({ contactVisible, setContactVisible }), [contactVisible]);

	useEffect(() => {
		setThemeClassName(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

		onThemeChange(({ media, matches }) => {
			if (!matches) {
				return;
			}

			setThemeClassName(media.replace(/^\(prefers-color-scheme: (.*)\)$/, (_, match) => match) as Theme);
		});

		if (CSS?.paintWorklet?.addModule && typeof CSS.paintWorklet.addModule === 'function') {
			CSS.paintWorklet.addModule(new URL('/houdini/avatar-polygon.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/blotto.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/bubbles.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/bytemare.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/circles.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/confetti.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/parallelowow.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/slanted-backgrounds.js', window.location.href));
		}

		import('react-gtm-module')
			.then(({ default: TagManager }) => {
				TagManager.initialize({
					gtmId: process.env.NEXT_PUBLIC_GTM_ID || ''
				});
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<Head />

			<Global styles={globalStyles} />

			<AppContext.Provider value={value}>
				<Component {...pageProps} />
			</AppContext.Provider>

			<Analytics debug={false} />
		</>
	);
};

export default App;
