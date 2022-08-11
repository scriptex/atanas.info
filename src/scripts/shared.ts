import * as React from 'react';
import { format } from 'date-fns';

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

export const mockUseEffect = (): void => {
	let useEffect: jest.Mock<React.EffectCallback>;

	const mockedUseEffect = () => {
		useEffect.mockImplementationOnce((f: () => React.EffectCallback) => f());
	};

	beforeEach(() => {
		useEffect = jest.spyOn(React, 'useEffect') as unknown as jest.Mock<React.EffectCallback>;

		mockedUseEffect();
	});
};

export const random = (): number => {
	const crypto = window.crypto || window.msCrypto;
	const array = new Uint32Array(1);

	return crypto.getRandomValues(array)[0] / (Math.pow(2, 32) - 1);
};

export const isPrerendering = window?.__PRERENDER_INJECTED?.isPrerendering === true;

// prettier-ignore
export const formatDate = (date: string | number, formatter = 'dd MMM yyyy'): string => format(new Date(date), formatter);

export const onThemeChange = (callback: (e: MediaQueryListEvent) => void) => {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', callback);
	window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', callback);
};
