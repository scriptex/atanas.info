import * as React from 'react';

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

export const gtag = (...args: any[]): void => {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(...args);
};
