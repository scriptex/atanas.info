/* eslint-disable @typescript-eslint/no-non-null-assertion */

import TweenLite from 'gsap';
import SimplexNoise from 'simplex-noise';

const a: HTMLElement | null = document.getElementById('audio');
const c: HTMLElement | null = document.getElementById('canvas');

const start: HTMLElement | null = document.querySelector('#start');
const homepage: HTMLElement | null = document.querySelector('#homepage');

const playBtn: HTMLElement | null = document.querySelector('#overlay .time .btn.play');
const pauseBtn: HTMLElement | null = document.querySelector('#overlay .time .btn.pause');
const timeOverlay: HTMLElement | null = document.querySelector('#overlay .time');

const audio = a as HTMLMediaElement;
const canvas = c as HTMLCanvasElement;

const dPI = Math.PI * 2;
const fftSize = 2048;
const nbParticles = 600;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let safari = false;

let WIDTH = canvas.width;
let HEIGHT = canvas.height;

const ctx = canvas.getContext('2d');
const order = [0, 1, 2];
const simplex = new SimplexNoise();
const circles: Circle[] = [];

let src;
let context;

let radius: number;
let isPause = false;
let analyser: AnalyserNode;
let dataArray: Uint8Array;
let bufferLength: number;

if (navigator.vendor.toLowerCase().includes('apple')) {
	audio!.hidden = false;
	document.body.classList.add('safari');
	start!.innerText = '';
	safari = true;
}

audio!.addEventListener('click', () => {
	if (safari) {
		TweenLite.to(homepage, 0.25, {
			ease: Power4.easeIn,
			opacity: 0,
			onComplete() {
				homepage!.style.display = 'none';
			}
		});

		audio.volume = 0.5;

		context = new (window.AudioContext || (window as any).webkitAudioContext)();

		src = context.createMediaElementSource(audio);
		analyser = context.createAnalyser();
		src.connect(analyser);
		analyser.connect(context.destination);
		analyser.fftSize = fftSize;
		analyser.smoothingTimeConstant = 0.5;
		analyser.maxDecibels = -10;
		bufferLength = analyser.frequencyBinCount;
		dataArray = new Uint8Array(bufferLength);
		isPause = false;
		update();

		timeOverlay!.classList.remove('pause');
		timeOverlay!.classList.add('play');
	}
});

start!.addEventListener('click', function () {
	TweenLite.to(homepage, 0.25, {
		ease: Power4.easeIn,
		opacity: 0,
		onComplete() {
			homepage!.style.display = 'none';
		}
	});

	audio.load();
	audio.volume = 0.5;
	context = new AudioContext();
	src = context.createMediaElementSource(audio);
	analyser = context.createAnalyser();
	src.connect(analyser);
	analyser.connect(context.destination);
	analyser.fftSize = fftSize;
	analyser.smoothingTimeConstant = 0.5;
	analyser.maxDecibels = -10;
	bufferLength = analyser.frequencyBinCount;
	dataArray = new Uint8Array(bufferLength);
	isPause = false;
	update();

	timeOverlay!.classList.remove('pause');
	timeOverlay!.classList.add('play');
});

pauseBtn!.addEventListener('click', function () {
	audio.pause();
	isPause = true;
	timeOverlay!.classList.remove('play');
	timeOverlay!.classList.add('pause');
});

playBtn!.addEventListener('click', function () {
	audio.play();
	isPause = false;
	update();
	timeOverlay!.classList.remove('pause');
	timeOverlay!.classList.add('play');
});

window.addEventListener('resize', () => {
	WIDTH = canvas.width;
	HEIGHT = canvas.height;

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	background('#000');
});

background('#000');

createCircles();

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

		this.xR = Math.random();
		this.yR = Math.random();

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
			this.rgb = `rgb(${Math.round(this.rgbArray[order[0]])},${Math.round(this.rgbArray[order[1]])},${Math.round(
				this.rgbArray[order[2]]
			)})`;
		}

		drawCircle(Math.round(this.x), Math.round(this.y), this.value * 0.1, this.rgb);
	}
}

function createCircles() {
	for (let i = 0; i < nbParticles; ++i) {
		circles.push(new Circle(i));
	}
}

function showCircles() {
	for (let i = 0; i < circles.length; ++i) {
		circles[i].update();
		circles[i].draw();
	}
}

function update(): void {
	if (isPause) {
		return;
	}

	analyser.getByteFrequencyData(dataArray);
	background('rgba(0,0,0,0.5)');
	radius = circles[3].value;
	showCircles();
	requestAnimationFrame(update);
}

function background(color: string): void {
	ctx!.fillStyle = color;
	ctx!.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawCircle(x: number, y: number, size: number, fill: string): void {
	ctx!.save();
	ctx!.beginPath();
	ctx!.fillStyle = fill;
	ctx!.translate(x, y);
	ctx!.arc(0, 0, size, 0, dPI);
	ctx!.fill();
	ctx!.closePath();
	ctx!.restore();
}
