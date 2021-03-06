type Bubble = {
	x: number;
	y: number;
	r: number;
	color: string;
};

registerPaint(
	'bubbles',
	class {
		public static get inputProperties(): string[] {
			return ['--bubbles-colors', '--bubbles-min-radius', '--bubbles-max-radius', '--bubbles-total-num'];
		}

		public paint(
			c: CanvasRenderingContext2D,
			{ width: w, height: h }: Record<string, number>,
			props: Map<string, any>
		) {
			let [
				// eslint-disable-next-line
				colors = ['#ef4c23', '#ff8d71'],
				minRadius = 10,
				maxRadius = 60,
				numCircles = 50
			]: any = this.parseProps(props);

			c.beginPath();

			c.fillRect(0, 0, w, h);
			c.closePath();

			minRadius = this.normalize(minRadius, 10);
			maxRadius = this.normalize(maxRadius, 60);
			numCircles = this.normalize(numCircles, 20);

			for (let i = 0, max = numCircles; i < max; i++) {
				this.drawCircle(c, {
					x: this.rand(0, w),
					y: this.rand(0, h),
					r: this.rand(minRadius, maxRadius),
					color: colors[this.rand(0, colors.length - 1)]
				});
			}
		}

		private parseProps(props: Map<string, any>): Array<string | void> {
			return ['--bubbles-colors', '--bubbles-min-radius', '--bubbles-max-radius', '--bubbles-total-num'].map(
				prop => {
					if (!props.get(prop).length) {
						return undefined;
					}

					if (prop === '--bubbles-colors') {
						return props
							.get(prop)
							.toString()
							.split(',')
							.map((color: string) => color.trim());
					} else {
						return parseInt(props.get(prop).toString(), 10);
					}
				}
			);
		}

		private drawCircle(c: CanvasRenderingContext2D, bubble: Bubble): void {
			const { x, y, r }: Bubble = bubble;

			c.beginPath();
			c.arc(x, y, r, 0, Math.PI * 2, false);
			c.fillStyle = this.drawGradient(c, bubble);
			c.fill();
			c.closePath();

			c.beginPath();
			c.ellipse(x, y - r + r / 1.25, r / 1.15, r / 1.25, Math.PI, 0, 2 * Math.PI);
			c.fillStyle = this.drawGradient(c, bubble);
			c.fill();
			c.closePath();

			c.beginPath();
			c.ellipse(x - r / 2 - r * 0.05, y - r / 2 - r * 0.15, r / 20, r / 6, Math.PI / 3.5, 0, 2 * Math.PI);
			c.fillStyle = 'white';
			c.fill();
			c.closePath();
		}

		private drawGradient(c: CanvasRenderingContext2D, { x, y, r, color }: Bubble): CanvasGradient {
			try {
				const grd: CanvasGradient = c.createRadialGradient(x, y, 0, x, y, r);

				grd.addColorStop(0.7, 'rgba(0,0,0,0)');
				grd.addColorStop(1, color);

				return grd;
			} catch (error) {
				return this.drawGradient(c, {
					x,
					y,
					r,
					color: 'black'
				});
			}
		}

		private rand(min: number, max: number): number {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		private normalize(val: number, fallback: number): number {
			return isNaN(val) ? fallback : val;
		}
	}
);
