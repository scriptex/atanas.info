import { ComponentType, FC, useEffect, useMemo, useState } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';
import { Fira_Sans } from 'next/font/google';
import Script from 'next/script';

import { Head } from '@components';
import { AppContext } from '@data/context';
import { onThemeChange, setThemeClassName, Theme } from '@scripts/shared';

import '@styles/index.css';

type ExtendedAppProps = AppProps & { Component: ComponentType };

const titleFont = Fira_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700']
});

export const App: FC<ExtendedAppProps> = ({ Component, pageProps }: ExtendedAppProps) => {
	const [contactVisible, setContactVisible] = useState(false);
	const value = useMemo(() => ({ contactVisible, setContactVisible }), [contactVisible]);

	useEffect(() => {
		setThemeClassName(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

		onThemeChange(({ matches, media }) => {
			if (!matches) {
				return;
			}

			setThemeClassName(
				media.replace(/^\(prefers-color-scheme: (.*)\)$/, (_: string, match: string) => match) as Theme
			);
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
					gtmId: process.env.NEXT_PUBLIC_GTM_ID || process.env.GTM_ID || ''
				});
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<Head />

			<style global={undefined} jsx={undefined}>{`
				:root {
					--font-fira-sans: ${titleFont.style.fontFamily};
				}
			`}</style>

			<AppContext.Provider value={value}>
				<Component {...pageProps} />
			</AppContext.Provider>

			<Analytics />

			<SpeedInsights />

			<Script
				onLoad={() => {
					window.kofiWidgetOverlay?.draw('scriptex', {
						'floating-chat.donateButton.background-color': '#ef4c23',
						'floating-chat.donateButton.text': 'Tip me',
						'floating-chat.donateButton.text-color': '#fff',
						type: 'floating-chat'
					});
				}}
				src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
			/>

			<Script data-use-service-core defer src="https://static.elfsight.com/platform/platform.js" />
		</>
	);
};

export default App;
