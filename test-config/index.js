// @ts-nocheck
const Enzyme = require('enzyme');
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
