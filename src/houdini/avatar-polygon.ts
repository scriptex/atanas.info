export default registerPaint(
	'avatar-polygon',
	class {
		public static get inputProperties(): string[] {
			return ['--avatar-sides', '--avatar-angle'];
		}

		public paint(
			ctx: CanvasRenderingContext2D,
			{ width, height }: Record<string, number>,
			properties: Map<string, any>
		): void {
			const steps: number = parseInt(properties.get('--avatar-sides').toString(), 10);
			const rotate: number = properties.get('--avatar-angle').value;
			const radius: number = Math.min(width, height) / 2;
			const center: Record<string, number> = {
				x: width / 2,
				y: height / 2
			};

			ctx.translate(width / 2, height / 2);
			ctx.rotate((rotate * Math.PI) / 180);
			ctx.translate(-width / 2, -height / 2);
			ctx.beginPath();

			let xPos: number = center.x + radius * Math.cos((2 * Math.PI * 0) / steps);
			let yPos: number = center.y + radius * Math.sin((2 * Math.PI * 0) / steps);

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
