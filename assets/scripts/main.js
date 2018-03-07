import { textRotate } from './slider';
import { drawSkills } from './skills';
import { initCanvas, createDots } from './canvas';
import { drawDonut } from './donut';
import { skills } from './skills-list';
import { texts } from './hero-texts';

const doc = document;
const win = window;
const header = doc.querySelector('.c-header');
const toggleHeaderState = winO => {
	header.classList.toggle('c-header--with-background', winO > 0);
};

const canvas = initCanvas('canvas');

drawSkills(skills);
createDots(canvas);
textRotate('text', texts);
drawDonut({
	value: 100,
	color: 'black',
	text: 'Click on the words',
	showPercent: false
});

win.addEventListener('load', event => {
	toggleHeaderState(win.pageYOffset);
});

win.addEventListener('scroll', event => {
	toggleHeaderState(win.pageYOffset);
});
