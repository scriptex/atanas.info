import { FC, useEffect, useRef } from 'react';
import lottie, { AnimationConfig, AnimationItem } from 'lottie-web';

type Props = {
	data: unknown;
	width: number;
	height: number;
	options?: Omit<AnimationConfig, 'animationData'>;
	className: string;
};

const defaultOptions = {
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

export const Animation: FC<Readonly<Props>> = ({ data: animationData, width, height, options, className }: Props) => {
	const element = useRef<HTMLDivElement>(null);
	const lottieInstance = useRef<AnimationItem | null>(null);

	useEffect(() => {
		if (element.current) {
			lottieInstance.current = lottie.loadAnimation({
				animationData,
				container: element.current,
				...defaultOptions,
				...options
			});
		}
		return () => {
			lottieInstance.current?.destroy();
		};
	}, [animationData, options]);

	return (
		<div className={className} style={{ width, height, marginLeft: 'auto', marginRight: 'auto' }} ref={element} />
	);
};

export default Animation;
