import * as React from 'react';
import lottie, { AnimationConfig } from 'lottie-web';

interface Props {
	data: any;
	width: number;
	height: number;
	options?: Omit<AnimationConfig, 'animationData'>;
	className: string;
}

const defaultOptions = {
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

export const Animation: React.FC<Readonly<Props>> = ({
	data: animationData,
	width,
	height,
	options,
	className
}: Props) => {
	const element = React.useRef<HTMLDivElement>(null);
	const lottieInstance = React.useRef<any>();

	React.useEffect(() => {
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
	}, [animationData]);

	return <div className={className} style={{ width, height, margin: 'auto' }} ref={element} />;
};

export default Animation;
