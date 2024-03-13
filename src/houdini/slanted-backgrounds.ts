registerPaint(
	'slanted-background',
	class {
		public static get inputProperties(): string[] {
			return ['--slanted-background-color', '--slanted-background-opacity'];
		}

		public static get contextOptions(): Record<string, boolean> {
			return {
				alpha: true
			};
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ height, width }: Record<string, number>,
			properties: Map<string, string>
		): void {
			const color: string = properties.get('--slanted-background-color')!;
			const opacity: number = Number(properties.get('--slanted-background-opacity'))!;

			ctx.fillStyle = color;

			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(width, 0);
			ctx.lineTo(width - 20, height);
			ctx.lineTo(0, height);
			ctx.fill();

			ctx.globalCompositeOperation = 'source-atop';

			ctx.fillStyle = `rgba(0, 0, 0 , ${opacity})`;
			ctx.beginPath();
			ctx.moveTo(0, height);
			ctx.lineTo(width, height - 8);
			ctx.lineTo(width, height);
			ctx.fill();
		}
	}
);
