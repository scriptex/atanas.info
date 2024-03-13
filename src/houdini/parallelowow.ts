const paintNameParallelOwOw = 'parallelowow';

registerPaint(
	paintNameParallelOwOw,
	class {
		public static get inputProperties(): string[] {
			return [
				`--${paintNameParallelOwOw}-tile-width`,
				`--${paintNameParallelOwOw}-base-colors`,
				`--${paintNameParallelOwOw}-probability`,
				`--${paintNameParallelOwOw}-stroke-color`,
				`--${paintNameParallelOwOw}-stroke-weight`
			];
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ height, width }: Record<string, number>,
			props: Map<string, string>
		): void {
			const tileWidth = parseInt(props.get(`--${paintNameParallelOwOw}-tile-width`)!, 10);
			const probability = parseFloat(props.get(`--${paintNameParallelOwOw}-probability`)!);
			const strokeColor = props.get(`--${paintNameParallelOwOw}-stroke-color`);
			const strokeWeight = parseFloat(props.get(`--${paintNameParallelOwOw}-stroke-weight`)!);

			const baseColors: string[] = props
				.get(`--${paintNameParallelOwOw}-base-colors`)!
				.toString()
				.split(',')
				.map((item: string) => item.trim());

			const radians = (Math.PI / 180) * 39.375;
			const tileHeight = tileWidth * (1 / 4);
			const xTiles = width / tileWidth;
			const yTiles = height / tileHeight;
			const outerRadius = width > height ? width * 2 : height * 2;

			if (strokeWeight > 0) {
				ctx.lineWidth = strokeWeight;
				ctx.strokeStyle = baseColors[1];
				ctx.lineCap = 'butt';
			}

			for (let y = -1; y < yTiles; y++) {
				const yOffset = y * tileHeight;

				for (let x = -1; x < xTiles + y; x++) {
					if (Math.random() > probability) {
						const xOffset = x * tileWidth - y * tileHeight;

						const upperLeftX = xOffset;
						const upperLeftY = yOffset;
						const upperRightX = xOffset + tileWidth;
						const upperRightY = yOffset;
						const lowerRightX = xOffset + (tileWidth - tileHeight);
						const lowerRightY = yOffset + tileHeight;
						const lowerLeftX = xOffset - tileHeight;
						const lowerLeftY = lowerRightY;

						ctx.fillStyle = baseColors[1];
						ctx.beginPath();
						ctx.moveTo(upperRightX, upperRightY);
						ctx.lineTo(Math.cos(radians) * outerRadius, Math.sin(radians) * outerRadius);
						ctx.lineTo(lowerRightX, lowerRightY);
						ctx.lineTo(upperRightX, upperRightY);
						ctx.fill();

						if (strokeWeight > 0) {
							ctx.stroke();
						}

						ctx.fillStyle = baseColors[2];
						ctx.beginPath();
						ctx.moveTo(lowerRightX, lowerRightY);
						ctx.lineTo(Math.cos(radians) * outerRadius, Math.sin(radians) * outerRadius);
						ctx.lineTo(lowerLeftX, lowerLeftY);
						ctx.moveTo(lowerLeftX, lowerLeftY);
						ctx.fill();

						if (strokeWeight > 0) {
							ctx.strokeStyle = strokeColor ?? 'black';
							ctx.stroke();
						}

						ctx.fillStyle = baseColors[0];
						ctx.beginPath();
						ctx.moveTo(upperLeftX, upperLeftY);
						ctx.lineTo(upperRightX, upperRightY);
						ctx.lineTo(lowerRightX, lowerRightY);
						ctx.lineTo(lowerLeftX, lowerLeftY);
						ctx.lineTo(upperLeftX, upperLeftY);
						ctx.fill();

						if (strokeWeight > 0) {
							ctx.stroke();
						}
					}
				}
			}
		}
	}
);
