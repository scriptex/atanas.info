const crypto = require('crypto');

// prettier-ignore
window.matchMedia = window.matchMedia || (() => ({
	matches: false,
	addListener: () => 'mocked matchMedia addListener',
	removeListener: () => 'mocked matchMedia removeListener'
}));

window.crypto = {
	// @ts-ignore
	getRandomValues: buffer => crypto.randomFillSync(buffer)
};

window.scrollTo = jest.fn();

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

jest.mock('@codersrank/summary/codersrank-summary.min', () => ({
	__esModule: true,
	default: jest.fn()
}));

jest.mock('@codersrank/activity/codersrank-activity.min', () => ({
	__esModule: true,
	default: jest.fn()
}));

jest.mock('@codersrank/timeline/codersrank-timeline.min', () => ({
	__esModule: true,
	default: jest.fn()
}));

jest.mock('@codersrank/education/codersrank-education.min', () => ({
	__esModule: true,
	default: jest.fn()
}));

jest.mock('@codersrank/portfolio/codersrank-portfolio.min', () => ({
	__esModule: true,
	default: jest.fn()
}));

jest.mock('@codersrank/skills-chart/codersrank-skills-chart.min', () => ({
	__esModule: true,
	default: jest.fn()
}));

jest.mock('@codersrank/work-experience/codersrank-work-experience.min', () => ({
	__esModule: true,
	default: jest.fn()
}));

jest.mock('react-ts-github-calendar', () => ({
	__esModule: true,
	default: 'GitHubCalendar'
}));

jest.mock('../src/scripts/gitlab-calendar', () => ({
	__esModule: true,
	default: 'GitLabCalendar'
}));
