type Circle = {
	x: number;
	y: number;
	r: number;
	color: string;
	alpha: number;
};

export default registerPaint(
	'circles',
	class {
		public static get inputProperties(): string[] {
			return ['--colors', '--min-radius', '--max-radius', '--min-opacity', '--max-opacity', '--num-circles'];
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ width: w, height: h }: Record<string, number>,
			props: Map<string, any>
		): void {
			const [
				colors = ['#ef4c23', '#ff8d71'],
				minRadius = 10,
				maxRadius = 50,
				minOpacity = 50,
				maxOpacity = 90,
				numCircles = 50
			]: any = this.parseProps(props);

			for (let i = 0, max = numCircles; i < max; i++) {
				this.drawCircle(ctx, {
					x: this.rand(0, w),
					y: this.rand(0, h),
					r: this.rand(minRadius, maxRadius),
					color: colors[this.rand(0, colors.length - 1)],
					alpha: this.rand(minOpacity, maxOpacity)
				});
			}
		}

		private parseProps(props: Map<string, any>): Array<string | void> {
			return ['--colors', '--min-radius', '--max-radius', '--min-opacity', '--max-opacity', '--num-circles'].map(
				(prop: string) => {
					if (!props.get(prop).length) {
						return undefined;
					}

					if (prop == '--colors') {
						return props
							.get(prop)
							.toString()
							.split(',')
							.map((color: string) => color.trim());
					} else {
						return parseInt(props.get(prop).toString());
					}
				}
			);
		}

		private drawCircle(ctx: CanvasRenderingContext2D, circle: Circle) {
			ctx.globalAlpha = circle.alpha / 100;
			ctx.beginPath();
			ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
			ctx.fillStyle = circle.color;
			ctx.fill();
			ctx.closePath();
		}

		private rand(min: number, max: number): number {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
);
