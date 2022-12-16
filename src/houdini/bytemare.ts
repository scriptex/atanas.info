const paintNameBytemare = 'bytemare';

export default registerPaint(
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
			{ width, height }: Record<string, number>,
			props: Map<string, any>
		): void {
			const gap = parseInt(props.get(`--${paintNameBytemare}-gap`));
			const tileSize = parseInt(props.get(`--${paintNameBytemare}-tile-size`));
			const probability = parseFloat(props.get(`--${paintNameBytemare}-probability`));

			const colors = props
				.get(`--${paintNameBytemare}-colors`)
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
						// 1. Draw shape on the right side of the tower cap
						ctx.fillStyle = colors[1]; // Change fill to darker color
						ctx.beginPath(); // Start new path
						ctx.lineTo(xOffset + tileSize, yOffset + gap); // Move to upper right
						ctx.lineTo(Math.cos(this.radians) * outerRadius, Math.sin(this.radians) * outerRadius); // Draw line off canvas
						ctx.lineTo(xOffset + tileSize, yOffset + tileSize); // Draw to lower right
						ctx.lineTo(xOffset + gap, yOffset + tileSize); // Draw line to lower left
						ctx.fill(); // Fill shape

						// 2. Draw shape on the right side of the tower cap
						ctx.fillStyle = colors[2]; // Change fill to darkest color
						ctx.beginPath(); // Start new path
						ctx.moveTo(xOffset + tileSize, yOffset + tileSize); // Move to lower right
						ctx.lineTo(xOffset + gap, yOffset + tileSize); // Draw line to lower left
						ctx.lineTo(Math.cos(this.radians) * outerRadius, Math.sin(this.radians) * outerRadius); // Draw line off canvas toward the lower left
						ctx.lineTo(xOffset + tileSize, yOffset + tileSize); // Draw line back to lower right
						ctx.fill(); // Fill shape

						// 3. Draw the tower cap
						ctx.fillStyle = colors[0]; // Change fill to the base color
						ctx.beginPath(); // Start new path
						ctx.rect(xOffset + gap, yOffset + gap, tileSize - gap, tileSize - gap); // Draw a rectangle
						ctx.fill(); // Fill shape
					}
				}
			}
		}
	}
);
