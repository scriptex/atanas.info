import { FC, useEffect, useRef } from 'react';

import { AnimationConfig, AnimationItem } from 'lottie-web';

type Props = {
	className: string;
	data: unknown;
	height: number;
	options?: Omit<AnimationConfig, 'animationData'>;
	width: number;
};

const defaultOptions = {
	autoplay: true,
	loop: true,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

export const Animation: FC<Readonly<Props>> = ({ className, data: animationData, height, options, width }: Props) => {
	const element = useRef<HTMLDivElement>(null);
	const lottieInstance = useRef<AnimationItem | null>(null);

	useEffect(() => {
		(async () => {
			const lottie = await import('lottie-web').then(m => m.default);

			if (element.current) {
				lottieInstance.current = lottie.loadAnimation({
					animationData,
					container: element.current,
					...defaultOptions,
					...options
				});
			}
		})();

		return () => {
			lottieInstance.current?.destroy();
		};
	}, [animationData, options]);

	return (
		<div className={className} ref={element} style={{ height, marginLeft: 'auto', marginRight: 'auto', width }} />
	);
};

export default Animation;
