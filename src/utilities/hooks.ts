import * as React from 'react';

export const useInterval = (callback: (...args: unknown[]) => unknown, delay: number): void => {
	const savedCallback: React.MutableRefObject<any> = React.useRef();

	React.useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	React.useEffect((): any => {
		const tick = (): void => {
			savedCallback.current();
		};

		if (delay !== null) {
			const id = setInterval(tick, delay);
			return (): void => clearInterval(id);
		}
	}, [delay]);
};
