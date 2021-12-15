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
	__esModule: true,
	default: {
		create: jest.fn()
	}
}));

jest.mock('simplex-noise', () => ({
	__esModule: true,
	default: jest.fn()
}));

[
	'react-syntax-highlighter/dist/esm/languages/hljs/javascript',
	'react-syntax-highlighter/dist/esm/languages/hljs/typescript',
	'react-syntax-highlighter/dist/esm/languages/hljs/css',
	'react-syntax-highlighter/dist/esm/languages/hljs/scss',
	'react-syntax-highlighter/dist/esm/languages/hljs/json',
	'react-syntax-highlighter/dist/esm/languages/hljs/shell'
].forEach(module => {
	jest.mock(module, () => ({
		__esModule: true,
		default: jest.fn(() => ({
			name: 'mocked language'
		}))
	}));
});

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
