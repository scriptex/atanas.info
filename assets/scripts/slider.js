import * as d3 from 'd3';

let i = 0;

export const textRotate = (id, data) => {
	const changeText = index => {
		d3
			.select(`#${id}`)
			.transition()
			.duration(500)
			.style('transform', 'scale(0)')
			.transition()
			.duration(500)
			.text(data[index])
			.style('transform', 'scale(1)')
			.on('end', () => {
				setTimeout(() => {
					i = i === data.length - 1 ? 0 : i + 1;

					changeText(i);
				}, 3000);
			});
	};

	changeText(i);
};
