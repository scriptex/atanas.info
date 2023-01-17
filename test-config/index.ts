// prettier-ignore
// @ts-ignore
window.matchMedia = window.matchMedia || (() => ({
	matches: false,
	addListener: () => 'mocked matchMedia addListener',
	removeListener: () => 'mocked matchMedia removeListener',
	addEventListener: () => 'mocked matchMedia addEventListener',
	removeEventListener: () => 'mocked matchMedia removeEventListener',
}));

window.crypto = {
	...require('crypto'),
	// @ts-ignore
	getRandomValues: buffer => require('crypto').randomFillSync(buffer)
};

window.scrollTo = jest.fn();

[
	'@codersrank/summary/codersrank-summary.min',
	'@codersrank/activity/codersrank-activity.min',
	'@codersrank/timeline/codersrank-timeline.min',
	'@codersrank/education/codersrank-education.min',
	'@codersrank/portfolio/codersrank-portfolio.min',
	'@codersrank/skills-chart/codersrank-skills-chart.min',
	'@codersrank/work-experience/codersrank-work-experience.min'
].forEach(module => {
	jest.mock(module, () => ({
		__esModule: true,
		default: jest.fn()
	}));
});

jest.mock('gsap/Draggable', () => ({
	__esModule: true,
	default: {
		create: jest.fn()
	}
}));

jest.mock('react-ts-github-calendar', () => ({
	__esModule: true,
	default: 'GitHubCalendar'
}));

jest.mock('simplex-noise', () => ({
	createNoise2D: () => jest.fn()
}));

jest.mock('../src/scripts/canvas', () => ({
	createSVG: jest.fn(),
	initCanvas: jest.fn(),
	createDots: jest.fn(),
	destroyDots: jest.fn()
}));

jest.mock('../src/scripts/skills.ts', () => ({
	drawSkills: jest.fn()
}));

jest.mock('../src/components/github-skyline', () => jest.fn(() => 'Github Skyline'));

jest.mock('lottie-web', () => ({
	__esModule: true,
	default: {
		loadAnimation: jest.fn()
	}
}));
