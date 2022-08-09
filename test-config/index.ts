// prettier-ignore
window.matchMedia = window.matchMedia || (() => ({
	matches: false,
	addListener: () => 'mocked matchMedia addListener',
	removeListener: () => 'mocked matchMedia removeListener',
	addEventListener: () => 'mocked matchMedia addEventListener',
	removeEventListener: () => 'mocked matchMedia removeEventListener',
}));

window.crypto = {
	...require('crypto'),
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

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () =>
	jest.fn(() => ({
		dark: {}
	}))
);

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

jest.mock('../src/scripts/gitlab-calendar', () => ({
	__esModule: true,
	default: 'GitLabCalendar'
}));

jest.mock('../src/components/github-skyline', () => jest.fn(() => 'Github Skyline'));

jest.mock('lottie-web', () => ({
	__esModule: true,
	default: {
		loadAnimation: jest.fn()
	}
}));
