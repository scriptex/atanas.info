/* eslint-disable prefer-const */

type Bubble = {
	color: string;
	r: number;
	x: number;
	y: number;
};

registerPaint(
	'bubbles',
	class {
		public static get inputProperties(): string[] {
			return [
				'--bubbles-colors',
				'--bubbles-min-radius',
				'--bubbles-max-radius',
				'--bubbles-total-num',
				'--bubbles-background'
			];
		}

		public paint(
			c: CanvasRenderingContext2D,
			{ height: h, width: w }: Record<string, number>,
			props: Map<string, string>
		) {
			let [
				colors = ['#ef4c23', '#ff8d71'],
				minRadius = 10,
				maxRadius = 60,
				numCircles = 50,
				background = '#000'
			] = this.parseProps(props);

			c.beginPath();

			c.fillStyle = background as string;

			c.fillRect(0, 0, w, h);

			c.closePath();

			minRadius = this.normalize(minRadius as number, 10);
			maxRadius = this.normalize(maxRadius as number, 60);
			numCircles = this.normalize(numCircles as number, 20);

			for (let i = 0, max = numCircles; i < max; i++) {
				this.drawCircle(c, {
					color: (colors as string[])[this.rand(0, (colors as string[]).length - 1)],
					r: this.rand(minRadius, maxRadius),
					x: this.rand(0, w),
					y: this.rand(0, h)
				});
			}
		}

		private parseProps(props: Map<string, string>): Array<string | string[] | number | void> {
			return [
				'--bubbles-colors',
				'--bubbles-min-radius',
				'--bubbles-max-radius',
				'--bubbles-total-num',
				'--bubbles-background'
			].map(prop => {
				if (!props.get(prop)!.length) {
					return undefined;
				}

				if (prop === '--bubbles-colors') {
					return props
						.get(prop)!
						.toString()
						.split(',')
						.map((color: string) => color.trim());
				}

				if (prop === '--bubbles-background') {
					return props.get(prop)!.toString().trim();
				}

				return parseInt(props.get(prop)!.toString(), 10);
			});
		}

		private drawCircle(c: CanvasRenderingContext2D, bubble: Bubble): void {
			const { r, x, y }: Bubble = bubble;

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

		private drawGradient(c: CanvasRenderingContext2D, { color, r, x, y }: Bubble): CanvasGradient {
			try {
				const grd: CanvasGradient = c.createRadialGradient(x, y, 0, x, y, r);

				grd.addColorStop(0.7, 'rgba(0,0,0,0)');
				grd.addColorStop(1, color);

				return grd;
			} catch (e: unknown) {
				console.error(e);

				return this.drawGradient(c, {
					color: 'black',
					r,
					x,
					y
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
