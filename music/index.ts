import 'scriptex-socials';
import 'html-head-component';
import SimplexNoise from 'simplex-noise';
import { Power4, TweenMax } from 'gsap';

import { random } from '../src/scripts/shared';
import { tracks } from '../src/data/tracks';

const list = document.querySelector('#tracks') as HTMLDivElement;
const menu = document.querySelector('#menu') as HTMLButtonElement;
const audio = document.getElementById('audio') as HTMLMediaElement;
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const playBtn = document.querySelector('#play') as HTMLButtonElement;
const pauseBtn = document.querySelector('#pause') as HTMLButtonElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let WIDTH: number = canvas.width;
let HEIGHT: number = canvas.height;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const simplex: SimplexNoise = new SimplexNoise();
const circles: Circle[] = [];

let src: MediaElementAudioSourceNode;
let context: AudioContext;

let radius: number;
let isPause = false;
let analyser: AnalyserNode;
let dataArray: Uint8Array;
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

	analyser.getByteFrequencyData(dataArray);

	background('rgba(0,0,0,0.5)');
	showCircles();
	requestAnimationFrame(update);
};

const background = (color: string): void => {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
};

const drawCircle = (x: number, y: number, size: number, fill: string): void => {
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = fill;
	ctx.translate(x, y);
	ctx.arc(0, 0, size, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
};

audio.src = tracks[0].url;
audio.load();
audio.volume = 0.5;

list.innerHTML = tracks
	.map(
		track =>
			`<button data-url="${track.url}"><em>Load</em><br /> <strong>${track.metaData.artist} - ${track.metaData.title}</strong></button>`
	)
	.join('\n');

menu.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();

	list.hidden = false;
});

playBtn.addEventListener('click', () => {
	playBtn.hidden = true;
	pauseBtn.hidden = false;

	audio.play();

	// eslint-disable-next-line compat/compat
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
});

pauseBtn.addEventListener('click', () => {
	playBtn.hidden = false;
	pauseBtn.hidden = true;

	audio.pause();

	isPause = true;
});

window.addEventListener('resize', () => {
	WIDTH = canvas.width;
	HEIGHT = canvas.height;

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	background('#000');
});

Array.from(list.querySelectorAll('button')).forEach((button: HTMLButtonElement) => {
	button.addEventListener('click', () => {
		list.hidden = true;
		playBtn.hidden = false;
		pauseBtn.hidden = true;

		audio.pause();

		audio.src = button.dataset.url || tracks[0].url;
		audio.load();

		isPause = true;
	});
});

background('#000');

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

	update() {
		if (3 === this.index) {
			TweenMax.to(this, 2, {
				ease: Power4.easeOut,
				value: dataArray[this.index]
			});
		} else {
			this.cachedValue = this.value;
			this.value = dataArray[this.index];
		}

		if (this.value !== this.cachedValue) {
			this.xC = radius * (2 * this.xR) * Math.cos(this.index + this.i) + WIDTH / 2;
			this.yC = radius * (2 * this.yR) * Math.sin(this.index + this.i) + HEIGHT / 2;

			this.p = (210 - this.value) * 0.5;

			this.y = simplex.noise2D(this.xR, this.i) * this.p + this.yC;
			this.x = simplex.noise2D(this.yR, this.i) * this.p + this.xC;

			this.i += 0.01;
		}
	}

	draw() {
		if (this.value !== this.cachedValue) {
			this.rgbArray = [this.value + 25 * (this.index / bufferLength), 500 * (this.index / bufferLength), 50];
			this.rgb = `rgb(${Math.round(this.rgbArray[0])},${Math.round(this.rgbArray[1])},${Math.round(
				this.rgbArray[2]
			)})`;
		}

		drawCircle(Math.round(this.x), Math.round(this.y), this.value * 0.1, this.rgb);
	}
}

createCircles();
