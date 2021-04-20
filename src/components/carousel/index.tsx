import * as React from 'react';
import TouchSweep from 'touchsweep';

interface CarouselItem {
	readonly image: string;
	readonly title: string;
	readonly subtitle: string;
}

interface Props {
	readonly items: CarouselItem[];
}

// codebeat:disable[ABC,LOC]
export const Carousel: React.FC<Props> = (props: Props) => {
	const cellCount = props.items.length;
	const cellWidth = 210;
	const theta = 360 / cellCount;
	const radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount));

	const ref = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const getSlideStyle = (index: number): React.CSSProperties => {
		const style: React.CSSProperties = {};

		if (index < cellCount) {
			const cellAngle = theta * index;

			style.opacity = 1;
			style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
		} else {
			style.opacity = 0;
			style.transform = 'none';
		}

		return style;
	};

	const getCarouselStyle = (): React.CSSProperties => {
		const angle = theta * selectedIndex * -1;

		return {
			transform: `translateZ(${-1 * radius}px) rotateY(${angle}deg)`
		};
	};

	const prev = () => setSelectedIndex(selectedIndex - 1);
	const next = () => setSelectedIndex(selectedIndex + 1);

	React.useEffect(() => {
		const area = ref?.current;
		const touchsweep = new TouchSweep(area);

		area?.addEventListener('swipeleft', next);
		area?.addEventListener('swiperight', prev);

		return () => {
			touchsweep.unbind();

			area?.removeEventListener('swipeleft', next);
			area?.removeEventListener('swiperight', prev);
		};
	});

	return (
		<>
			<div className="carousel" ref={ref}>
				<div className="carousel__container" style={getCarouselStyle()}>
					{props.items.map((item: CarouselItem, index: number) => (
						<div className="carousel__slide" key={index} style={getSlideStyle(index)}>
							<img src={item.image} alt={item.title} />

							<div className="carousel__slide-overlay">
								<strong>{item.title}</strong>

								<span>{item.subtitle}</span>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="carousel__controls">
				<button className="carousel__control carousel__control--prev" onClick={prev}>
					Previous
				</button>

				<button className="carousel__control carousel__control--next" onClick={next}>
					Next
				</button>
			</div>
		</>
	);
};
// codebeat:enable[ABC,LOC]

export default Carousel;
