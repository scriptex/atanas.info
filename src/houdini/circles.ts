type Circle = {
	alpha: number;
	color: string;
	r: number;
	x: number;
	y: number;
};

registerPaint(
	'circles',
	class {
		public static get inputProperties(): string[] {
			return ['--colors', '--min-radius', '--max-radius', '--min-opacity', '--max-opacity', '--num-circles'];
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ height: h, width: w }: Record<string, number>,
			props: Map<string, string>
		): void {
			const [
				colors = ['#ef4c23', '#ff8d71'],
				minRadius = 10,
				maxRadius = 50,
				minOpacity = 50,
				maxOpacity = 90,
				numCircles = 50
			] = this.parseProps(props);

			for (let i = 0, max = numCircles as number; i < max; i++) {
				this.drawCircle(ctx, {
					alpha: this.rand(minOpacity as number, maxOpacity as number),
					color: (colors as string[])[this.rand(0, (colors as string[]).length - 1)],
					r: this.rand(minRadius as number, maxRadius as number),
					x: this.rand(0, w),
					y: this.rand(0, h)
				});
			}
		}

		private parseProps(props: Map<string, string>): Array<number | string[] | void> {
			return ['--colors', '--min-radius', '--max-radius', '--min-opacity', '--max-opacity', '--num-circles'].map(
				(prop: string) => {
					if (!props.get(prop)!.length) {
						return undefined;
					}

					if (prop == '--colors') {
						return props
							.get(prop)!
							.toString()
							.split(',')
							.map((color: string) => color.trim());
					} else {
						return parseInt(props.get(prop)!.toString());
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
