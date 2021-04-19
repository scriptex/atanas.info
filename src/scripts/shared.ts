import * as React from 'react';

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
	let useEffect: any;

	const mockedUseEffect = () => {
		useEffect.mockImplementationOnce((f: () => any) => f());
	};

	beforeEach(() => {
		useEffect = jest.spyOn(React, 'useEffect');

		mockedUseEffect();
	});
};

export const random = (): number => {
	const crypto = window.crypto || window.msCrypto;
	const array = new Uint32Array(1);

	return crypto.getRandomValues(array)[0] / (Math.pow(2, 32) - 1);
};

export const isPrerendering = navigator.userAgent === 'ReactSnap';
