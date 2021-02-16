import * as React from 'react';

interface CarouselItem {
	readonly image: string;
	readonly title: string;
	readonly subtitle: string;
}

interface Props {
	readonly items: CarouselItem[];
}

export const Carousel: React.FC<Props> = (props: Props) => {
	const cellCount = props.items.length;
	const cellWidth = 210;
	const theta = 360 / cellCount;
	const radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount));
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
			transform: `translateZ(${radius / 3}px) rotateY(${angle}deg)`
		};
	};

	return (
		<>
			<div className="carousel">
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
				<button
					className="carousel__control carousel__control--prev"
					onClick={() => {
						setSelectedIndex(selectedIndex - 1);
					}}
				>
					Previous
				</button>

				<button
					className="carousel__control carousel__control--next"
					onClick={() => {
						setSelectedIndex(selectedIndex + 1);
					}}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default Carousel;
