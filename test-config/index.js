// @ts-nocheck
const Enzyme = require('enzyme');
const crypto = require('crypto');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({
	adapter: new Adapter()
});

// prettier-ignore
window.matchMedia = window.matchMedia || (() => ({
	matches: false,
	addListener: () => {},
	removeListener: () => {}
}));

window.crypto = {
	getRandomValues: buffer => crypto.randomFillSync(buffer)
};

jest.mock('../src/components/github-skyline', () => jest.fn(() => 'Github Skyline'));

jest.mock('gsap/Draggable', () => ({
	default: jest.fn()
}));
