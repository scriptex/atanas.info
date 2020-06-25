import * as React from 'react';

export const mockUseEffect = (): void => {
	let useEffect: any;

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce((f: () => any) => f());
	};

	beforeEach(() => {
		useEffect = jest.spyOn(React, 'useEffect');

		mockUseEffect();
	});
};
