// @ts-nocheck
const Enzyme = require('enzyme');
const crypto = require('crypto');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({
	adapter: new Adapter()
});

// prettier-ignore
window.matchMedia = window.matchMedia || (() => ({
	matches: false,
	addListener: () => 'mocked matchMedia addListener',
	removeListener: () => 'mocked matchMedia removeListener'
}));

window.crypto = {
	getRandomValues: buffer => crypto.randomFillSync(buffer)
};

jest.mock('../src/components/github-skyline', () => jest.fn(() => 'Github Skyline'));

jest.mock('gsap/Draggable', () => ({
	default: jest.fn()
}));

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () =>
	jest.fn(() => ({
		dark: {}
	}))
);

jest.mock('../src/scripts/canvas', () => ({
	createSVG: jest.fn(),
	initCanvas: jest.fn(),
	createDots: jest.fn(),
	destroyDots: jest.fn()
}));

jest.mock('../src/scripts/skills.ts', () => ({
	drawSkills: jest.fn()
}));
