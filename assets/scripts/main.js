import { textRotate } from './slider';
import { drawSkills } from './skills';
import { initCanvas, createDots } from './canvas';
import { drawDonut } from './donut';

const doc = document;
const win = window;
const header = doc.querySelector('.c-header');

const texts = [
	'Full Stack Web Developer',
	'CSS Experimenter',
	'JavaScript Master',
	'Father',
	'NodeJS Enthusiast'
];

const skills = [
	{ text: 'JavaScript', size: 90, score: 100 },
	{ text: 'React', size: 75, score: 75 },
	{ text: 'AngularJS', size: 80, score: 90 },
	{ text: 'Vue', size: 85, score: 90 },
	{ text: 'Backbone', size: 55, score: 65 },
	{ text: 'D3', size: 82, score: 95 },
	{ text: 'jQuery', size: 79, score: 100 },
	{ text: 'nodejs', size: 66, score: 85 },
	{ text: 'Gulp', size: 72, score: 100 },
	{ text: 'Grunt', size: 50, score: 95 },
	{ text: 'Webpack', size: 69, score: 90 },
	{ text: 'CSS / CSS3', size: 88, score: 100 },
	{ text: 'LESS', size: 60, score: 100 },
	{ text: 'SASS', size: 70, score: 100 },
	{ text: 'PostCSS', size: 77, score: 100 },
	{ text: 'HTML / HTML5', size: 99, score: 100 },
	{ text: 'SVG', size: 84, score: 95 },
	{ text: 'Ionic', size: 62, score: 90 },
	{ text: 'Bootstrap', size: 75, score: 100 },
	{ text: 'Foundation', size: 63, score: 95 },
	{ text: 'SVN', size: 57, score: 80 },
	{ text: 'GIT', size: 74, score: 95 },
	{ text: 'PHP', size: 80, score: 85 },
	{ text: 'WordPress', size: 89, score: 85 },
	{ text: 'Squarespace', size: 50, score: 80 },
	{ text: 'Shopify', size: 58, score: 75 },
	{ text: 'Photoshop', size: 61, score: 95 },
	{ text: 'Illustrator', size: 67, score: 70 },
	{ text: 'Sketch', size: 76, score: 85 },
	{ text: 'Affinity Designer', size: 81, score: 90 },
	{ text: 'Bash', size: 56, score: 70 },
	{ text: 'Meteor', size: 70, score: 70 }
];

const toggleHeaderState = winO => {
	header.classList.toggle('c-header--with-background', winO > 0);
};

const canvas = initCanvas('canvas');

drawSkills(skills);
createDots(canvas);
textRotate('text', texts);
drawDonut();

win.addEventListener('load', event => {
	toggleHeaderState(win.pageYOffset);
});

win.addEventListener('scroll', event => {
	toggleHeaderState(win.pageYOffset);
});
