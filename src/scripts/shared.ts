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
	// eslint-disable-next-line compat/compat
	const array = new Uint32Array(1);

	return crypto.getRandomValues(array)[0] / (Math.pow(2, 32) - 1);
};

export const isPrerendering = window?.__PRERENDER_INJECTED?.isPrerendering === true;
