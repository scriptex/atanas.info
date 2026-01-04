registerPaint(
	'avatar-polygon',
	class {
		public static get inputProperties(): string[] {
			return ['--avatar-sides', '--avatar-angle'];
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ height, width }: Record<string, number>,
			properties: Map<string, string>
		): void {
			const steps: number = parseInt(properties.get('--avatar-sides')!, 10);
			const rotate: number = parseInt(properties.get('--avatar-angle')!, 10);
			const radius: number = Math.min(width, height) / 2;
			const center: Record<string, number> = {
				x: width / 2,
				y: height / 2
			};

			ctx.translate(width / 2, height / 2);
			ctx.rotate((rotate * Math.PI) / 180);
			ctx.translate(-width / 2, -height / 2);
			ctx.beginPath();

			let xPos: number = center.x + radius * Math.cos(0);
			let yPos: number = center.y + radius * Math.sin(0);

			ctx.moveTo(xPos, yPos);

			for (let i = 1; i <= steps; i++) {
				xPos = center.x + radius * Math.cos((2 * Math.PI * i) / steps);
				yPos = center.y + radius * Math.sin((2 * Math.PI * i) / steps);

				ctx.lineTo(xPos, yPos);
			}

			ctx.closePath();

			ctx.fillStyle = 'black';
			ctx.fill();
		}
	}
);
