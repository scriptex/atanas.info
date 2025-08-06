import { Power4, TweenMax } from 'gsap';
import { createNoise2D } from 'simplex-noise';

import { onThemeChange, random } from './shared';

let src: MediaElementAudioSourceNode;

export type MusicFunctions = {
	onPause: () => void;
	onPlay: () => void;
};

export const music = (container: HTMLDivElement): MusicFunctions => {
	const audio = container.querySelector('audio') as HTMLMediaElement;
	const canvas = container.querySelector('canvas') as HTMLCanvasElement;

	canvas.width = Math.min(window.innerWidth, 1400);
	canvas.height = window.innerHeight;

	let WIDTH: number = canvas.width;
	let HEIGHT: number = canvas.height;

	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
	const noise2D = createNoise2D();
	const circles: Circle[] = [];

	let radius: number;
	let context: AudioContext;
	let isPause = false;
	let analyser: AnalyserNode;
	let dataArray: Uint8Array<ArrayBuffer>;
	let bufferLength: number;

	const createCircles = (): void => {
		for (let i = 0; i < 600; ++i) {
			circles.push(new Circle(i));
		}
	};

	const showCircles = (): void => {
		for (const circle of circles) {
			circle.update();
			circle.draw();
		}
	};

	const update = (): void => {
		if (isPause) {
			return;
		}

		radius = circles[3].value;

		analyser?.getByteFrequencyData(dataArray);

		background();
		showCircles();
		requestAnimationFrame(update);
	};

	const background = (): void => {
		ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--color-secondary');
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
	};

	const createVis = () => {
		context = new AudioContext();

		if (!src) {
			src = context.createMediaElementSource(audio);

			analyser = context.createAnalyser();

			src.connect(analyser);

			analyser.connect(context.destination);
			analyser.fftSize = 2048;
			analyser.smoothingTimeConstant = 0.5;
			analyser.maxDecibels = -10;

			bufferLength = analyser.frequencyBinCount;

			dataArray = new Uint8Array(bufferLength);
		}

		isPause = false;

		update();
	};

	window.addEventListener('resize', () => {
		WIDTH = canvas.width;
		HEIGHT = canvas.height;

		canvas.width = Math.min(window.innerWidth, 1400);
		canvas.height = window.innerHeight;

		background();
	});

	onThemeChange(update);

	background();

	class Circle {
		private i: number;
		private p = 0;
		private x = 0;
		private y = 0;
		private xR: number;
		private yR: number;
		private xC = 0;
		private yC = 0;
		private index: number;
		private rgb = '';
		private rgbArray: number[] = [];
		private cachedValue = 0;

		public value: number;

		constructor(index: number) {
			this.index = index;

			this.xR = random();
			this.yR = random();

			this.i = 0;
			this.value = 0;
		}

		public update(): void {
			if (3 === this.index) {
				TweenMax.to(this, 2, {
					ease: Power4.easeOut,
					value: dataArray?.[this.index]
				});
			} else {
				this.cachedValue = this.value;
				this.value = dataArray?.[this.index];
			}

			if (this.value !== this.cachedValue) {
				this.xC = radius * (2 * this.xR) * Math.cos(this.index + this.i) + WIDTH / 2;
				this.yC = radius * (2 * this.yR) * Math.sin(this.index + this.i) + HEIGHT / 2;

				this.p = (210 - this.value) * 0.5;

				this.y = noise2D(this.xR, this.i) * this.p + this.yC;
				this.x = noise2D(this.yR, this.i) * this.p + this.xC;

				this.i += 0.01;
			}
		}

		public draw(): void {
			if (this.value !== this.cachedValue) {
				this.rgbArray = [this.value + 25 * (this.index / bufferLength), 500 * (this.index / bufferLength), 50];
				this.rgb = `rgb(${Math.round(this.rgbArray[0])},${Math.round(this.rgbArray[1])},${Math.round(
					this.rgbArray[2]
				)})`;
			}

			this.drawCircle(Math.round(this.x), Math.round(this.y), this.value * 0.1, this.rgb);
		}

		private drawCircle(x: number, y: number, size: number, fill: string): void {
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = fill;
			ctx.translate(x, y);
			ctx.arc(0, 0, size, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		}
	}

	createCircles();

	return {
		onPause: () => {
			isPause = true;
		},
		onPlay: createVis
	};
};
