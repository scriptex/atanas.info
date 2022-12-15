"use strict";
const paintNameBlotto = 'blotto';
registerPaint(paintNameBlotto, class {
    static get inputProperties() {
        return [
            `--${paintNameBlotto}-tile-size`,
            `--${paintNameBlotto}-color`,
            `--${paintNameBlotto}-amplitude`,
            `--${paintNameBlotto}-max-opacity`,
            `--${paintNameBlotto}-blend-mode`
        ];
    }
    paint(ctx, { width, height }, props) {
        const tileSize = parseInt(props.get(`--${paintNameBlotto}-tile-size`));
        const amplitude = parseFloat(props.get(`--${paintNameBlotto}-amplitude`));
        const maxOpacity = parseFloat(props.get(`--${paintNameBlotto}-max-opacity`));
        const xTiles = Math.round(width / tileSize);
        const yTiles = Math.round(height / tileSize);
        const fullCircle = Math.PI * 2;
        ctx.fillStyle = props.get(`--${paintNameBlotto}-color`).toString();
        ctx.globalCompositeOperation = props.get(`--${paintNameBlotto}-blend-mode`).toString();
        for (let y = 0; y < yTiles; y++) {
            const yOffset = y * tileSize;
            for (let x = 0; x < xTiles; x++) {
                const opacity = Math.random() % Math.random();
                ctx.globalAlpha = opacity > maxOpacity ? maxOpacity : opacity;
                ctx.beginPath();
                ctx.arc(x * tileSize, yOffset, tileSize * Math.random() * amplitude, 0, fullCircle);
                ctx.fill();
            }
        }
    }
});
