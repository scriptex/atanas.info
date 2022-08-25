import * as React from 'react';
import { format } from 'date-fns';

export type Theme = 'dark' | 'light';
export type Ref<T> = React.MutableRefObject<T | null>;

export const useScript = (url: string, defer = false): void => {
	React.useEffect(() => {
		const script = document.createElement('script');

		script.src = url;
		script.async = true;

		if (defer) {
			script.defer = true;
		}

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
};

export const random = (): number => {
	const crypto = window.crypto || window.msCrypto;
	const array = new Uint32Array(1);

	return crypto.getRandomValues(array)[0] / (Math.pow(2, 32) - 1);
};

// prettier-ignore
export const formatDate = (date: string | number, formatter = 'dd MMM yyyy'): string => format(new Date(date), formatter);

export const setThemeClassName = (theme: Theme): void => {
	const { classList } = document.documentElement;

	classList.remove('theme-dark');
	classList.remove('theme-light');
	classList.add(`theme-${theme}`);
};

export const onThemeChange = (callback: (e: MediaQueryListEvent) => void): void => {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', callback);
	window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', callback);
};

export const waitForElement = (selector: string): Promise<Element | null> =>
	new Promise(resolve => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver(() => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});

export const composeClassName = (main: string, modifiers: string[], optional: Array<string | undefined> = []): string =>
	[main, ...modifiers.filter(Boolean).map((modifier: string) => `${main}--${modifier}`), ...optional]
		.filter(Boolean)
		.join(' ');
