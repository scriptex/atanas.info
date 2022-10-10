// @ts-ignore
const paintName = 'blotto';

registerPaint(
	paintName,
	class {
		public static get inputProperties(): string[] {
			return [
				`--${paintName}-tile-size`,
				`--${paintName}-color`,
				`--${paintName}-amplitude`,
				`--${paintName}-max-opacity`,
				`--${paintName}-blend-mode`
			];
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ width, height }: Record<string, number>,
			props: Map<string, any>
		) {
			const tileSize = parseInt(props.get(`--${paintName}-tile-size`));
			const amplitude = parseFloat(props.get(`--${paintName}-amplitude`));
			const maxOpacity = parseFloat(props.get(`--${paintName}-max-opacity`));

			const xTiles = Math.round(width / tileSize);
			const yTiles = Math.round(height / tileSize);
			const fullCircle = Math.PI * 2;

			console.log(props.get(`--${paintName}-color`).toString(), tileSize, xTiles, yTiles);

			ctx.fillStyle = props.get(`--${paintName}-color`).toString();
			ctx.globalCompositeOperation = props.get(`--${paintName}-blend-mode`).toString();

			for (let y = 0; y < yTiles; y++) {
				const yOffset = y * tileSize;

				console.log(yOffset);

				for (let x = 0; x < xTiles; x++) {
					const opacity = Math.random() % Math.random();

					ctx.globalAlpha = opacity > maxOpacity ? maxOpacity : opacity;
					ctx.beginPath();
					ctx.arc(x * tileSize, yOffset, tileSize * Math.random() * amplitude, 0, fullCircle);
					ctx.fill();
				}
			}
		}
	}
);
