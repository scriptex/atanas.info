"use strict";
registerPaint('avatar-polygon', class {
    static get inputProperties() {
        return ['--avatar-sides', '--avatar-angle'];
    }
    paint(ctx, { width, height }, properties) {
        const steps = parseInt(properties.get('--avatar-sides').toString(), 10);
        const rotate = properties.get('--avatar-angle').value;
        const radius = Math.min(width, height) / 2;
        const center = {
            x: width / 2,
            y: height / 2
        };
        ctx.translate(width / 2, height / 2);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.translate(-width / 2, -height / 2);
        ctx.beginPath();
        let xPos = center.x + radius * Math.cos((2 * Math.PI * 0) / steps);
        let yPos = center.y + radius * Math.sin((2 * Math.PI * 0) / steps);
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
});
