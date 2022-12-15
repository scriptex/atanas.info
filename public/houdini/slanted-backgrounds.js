"use strict";
registerPaint('slanted-background', class {
    static get inputProperties() {
        return ['--slanted-background-color', '--slanted-background-opacity'];
    }
    static get contextOptions() {
        return {
            alpha: true
        };
    }
    paint(ctx, { width, height }, properties) {
        const color = properties.get('--slanted-background-color');
        const opacity = properties.get('--slanted-background-opacity');
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
});
