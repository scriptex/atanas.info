const paintNameBytemare = 'bytemare';

registerPaint(
	paintNameBytemare,
	class {
		private radians: number;

		constructor() {
			this.radians = (Math.PI / 180) * 45;
		}

		public static get inputProperties(): string[] {
			return [
				`--${paintNameBytemare}-gap`,
				`--${paintNameBytemare}-colors`,
				`--${paintNameBytemare}-tile-size`,
				`--${paintNameBytemare}-probability`
			];
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ height, width }: Record<string, number>,
			props: Map<string, string>
		): void {
			const gap = parseInt(props.get(`--${paintNameBytemare}-gap`)!);
			const tileSize = parseInt(props.get(`--${paintNameBytemare}-tile-size`)!);
			const probability = parseFloat(props.get(`--${paintNameBytemare}-probability`)!);

			const colors = props
				.get(`--${paintNameBytemare}-colors`)!
				.toString()
				.split(',')
				.map((item: string) => item.trim());

			const outerRadius = width > height ? width * 1.5 : height * 1.5;
			const geomTileWidth = width / tileSize;
			const geomTileHeight = height / tileSize;

			for (let y = -4; y < geomTileHeight; y++) {
				const yOffset = y * tileSize;

				for (let x = -4; x < geomTileWidth; x++) {
					const xOffset = x * tileSize;

					if (Math.random() > probability) {
						ctx.fillStyle = colors[1];
						ctx.beginPath();
						ctx.lineTo(xOffset + tileSize, yOffset + gap);
						ctx.lineTo(Math.cos(this.radians) * outerRadius, Math.sin(this.radians) * outerRadius);
						ctx.lineTo(xOffset + tileSize, yOffset + tileSize);
						ctx.lineTo(xOffset + gap, yOffset + tileSize);
						ctx.fill();

						ctx.fillStyle = colors[2];
						ctx.beginPath();
						ctx.moveTo(xOffset + tileSize, yOffset + tileSize);
						ctx.lineTo(xOffset + gap, yOffset + tileSize);
						ctx.lineTo(Math.cos(this.radians) * outerRadius, Math.sin(this.radians) * outerRadius);
						ctx.lineTo(xOffset + tileSize, yOffset + tileSize);
						ctx.fill();

						ctx.fillStyle = colors[0];
						ctx.beginPath();
						ctx.rect(xOffset + gap, yOffset + gap, tileSize - gap, tileSize - gap);
						ctx.fill();
					}
				}
			}
		}
	}
);
