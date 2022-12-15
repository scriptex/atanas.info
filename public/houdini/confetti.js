"use strict";
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
registerPaint('confetti', class {
    static get inputProperties() {
        return ['--confetti-amount', '--confetti-length', '--confetti-weight'];
    }
    paint(ctx, { width, height }, props) {
        const amount = props.get('--confetti-amount');
        const minLength = 3;
        const maxLength = minLength + parseInt(props.get('--confetti-length'));
        const minWeight = 1;
        const maxWeight = minWeight + parseInt(props.get('--confetti-weight'));
        for (let i = 0; i < amount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * (height - maxLength);
            const confettiLength = getRandom(minLength, maxLength);
            const confettiWeight = getRandom(minWeight, maxWeight);
            const hue = getRandom(0, 360);
            const sat = getRandom(90, 100);
            const light = getRandom(40, 90);
            const color = 'hsl(' + hue + 'deg,' + sat + '%,' + light + '%)';
            ctx.lineWidth = confettiWeight;
            ctx.strokeStyle = color;
            const angle = getRandom(0, 89);
            const hypotenuse = confettiLength;
            const newX = x + Math.cos(angle) * hypotenuse;
            const newY = y + Math.sin(angle) * hypotenuse;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(newX, newY);
            ctx.stroke();
        }
    }
});
