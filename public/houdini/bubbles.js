"use strict";
registerPaint('bubbles', class {
    static get inputProperties() {
        return [
            '--bubbles-colors',
            '--bubbles-min-radius',
            '--bubbles-max-radius',
            '--bubbles-total-num',
            '--bubbles-background'
        ];
    }
    paint(c, { width: w, height: h }, props) {
        let [colors = ['#ef4c23', '#ff8d71'], minRadius = 10, maxRadius = 60, numCircles = 50, background = '#000'] = this.parseProps(props);
        c.beginPath();
        c.fillStyle = background;
        c.fillRect(0, 0, w, h);
        c.closePath();
        minRadius = this.normalize(minRadius, 10);
        maxRadius = this.normalize(maxRadius, 60);
        numCircles = this.normalize(numCircles, 20);
        for (let i = 0, max = numCircles; i < max; i++) {
            this.drawCircle(c, {
                x: this.rand(0, w),
                y: this.rand(0, h),
                r: this.rand(minRadius, maxRadius),
                color: colors[this.rand(0, colors.length - 1)]
            });
        }
    }
    parseProps(props) {
        return [
            '--bubbles-colors',
            '--bubbles-min-radius',
            '--bubbles-max-radius',
            '--bubbles-total-num',
            '--bubbles-background'
        ].map(prop => {
            if (!props.get(prop).length) {
                return undefined;
            }
            if (prop === '--bubbles-colors') {
                return props
                    .get(prop)
                    .toString()
                    .split(',')
                    .map((color) => color.trim());
            }
            if (prop === '--bubbles-background') {
                return props.get(prop).toString().trim();
            }
            return parseInt(props.get(prop).toString(), 10);
        });
    }
    drawCircle(c, bubble) {
        const { x, y, r } = bubble;
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2, false);
        c.fillStyle = this.drawGradient(c, bubble);
        c.fill();
        c.closePath();
        c.beginPath();
        c.ellipse(x, y - r + r / 1.25, r / 1.15, r / 1.25, Math.PI, 0, 2 * Math.PI);
        c.fillStyle = this.drawGradient(c, bubble);
        c.fill();
        c.closePath();
        c.beginPath();
        c.ellipse(x - r / 2 - r * 0.05, y - r / 2 - r * 0.15, r / 20, r / 6, Math.PI / 3.5, 0, 2 * Math.PI);
        c.fillStyle = 'white';
        c.fill();
        c.closePath();
    }
    drawGradient(c, { x, y, r, color }) {
        try {
            const grd = c.createRadialGradient(x, y, 0, x, y, r);
            grd.addColorStop(0.7, 'rgba(0,0,0,0)');
            grd.addColorStop(1, color);
            return grd;
        }
        catch (error) {
            return this.drawGradient(c, {
                x,
                y,
                r,
                color: 'black'
            });
        }
    }
    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    normalize(val, fallback) {
        return isNaN(val) ? fallback : val;
    }
});
