import type { AppProps } from 'next/app';
import { FC, useState, useEffect, createContext } from 'react';

import { Head } from '@components';
import { Theme, onThemeChange, setThemeClassName } from '@scripts/shared';

import '@styles/index.css';

export const AppContext = createContext({
	contactVisible: false,
	setContactVisible: (state: boolean) => state
});

export const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	const [contactVisible, setContactVisible] = useState(false);
	const value: any = { contactVisible, setContactVisible };

	useEffect(() => {
		setThemeClassName(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

		onThemeChange(({ media, matches }) => {
			if (!matches) {
				return;
			}

			setThemeClassName(media.replace(/^\(prefers-color-scheme: (.*)\)$/, (_, match) => match) as Theme);
		});

		if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule && typeof CSS.paintWorklet.addModule === 'function') {
			CSS.paintWorklet.addModule(new URL('/houdini/avatar-polygon.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/blotto.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/bubbles.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/bytemare.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/circles.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/confetti.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/parallelowow.js', window.location.href));
			CSS.paintWorklet.addModule(new URL('/houdini/slanted-backgrounds.js', window.location.href));
		}

		import('react-gtm-module').then(({ default: TagManager }) => {
			TagManager.initialize({
				gtmId: process.env.NEXT_PUBLIC_GTM_ID || ''
			});
		});
	}, []);

	return (
		<>
			<Head />

			<AppContext.Provider value={value}>
				<Component {...pageProps} />
			</AppContext.Provider>
		</>
	);
};

export default App;
