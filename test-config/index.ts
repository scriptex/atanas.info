/* eslint-disable @typescript-eslint/no-require-imports */
import { TextEncoder } from 'node:util';

import * as shared from '@scripts/shared';

global.TextEncoder = TextEncoder as any;

window.HTMLMediaElement.prototype.load = () => {
	/* do nothing */
};

window.HTMLMediaElement.prototype.play = async () => {
	/* do nothing */
};

window.HTMLMediaElement.prototype.pause = () => {
	/* do nothing */
};

global.IntersectionObserver = class IntersectionObserver {
	root = null;
	rootMargin = '';
	thresholds = [0];

	disconnect() {
		return null;
	}

	observe() {
		return null;
	}

	takeRecords() {
		return [];
	}

	unobserve() {
		return null;
	}
};

// prettier-ignore
window.matchMedia = window.matchMedia || (() => ({
	addEventListener: () => 'mocked matchMedia addEventListener',
	addListener: () => 'mocked matchMedia addListener',
	matches: false,
	removeEventListener: () => 'mocked matchMedia removeEventListener',
	removeListener: () => 'mocked matchMedia removeListener',
}));

window.crypto = {
	...require('crypto'),
	getRandomValues: (buffer: Buffer) => require('crypto').randomFillSync(buffer)
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

jest.mock('gitlab-calendar', () => ({
	__esModule: true,
	default: jest.fn(() => 'Gitlab Calendar'),
	GitlabCalendar: jest.fn(() => 'Gitlab Calendar')
}));

jest.mock('swiper/react', () => ({
	Swiper: ({ children }: { children: HTMLDivElement }) => children,
	SwiperSlide: ({ children }: { children: HTMLDivElement }) => children
}));

jest.mock('swiper/modules', () => ({
	Autoplay: () => null,
	Keyboard: () => null,
	Thumbs: () => null
}));

jest.mock('simplex-noise', () => ({
	createNoise2D: () => jest.fn()
}));

jest.mock('../src/scripts/canvas', () => ({
	createDots: jest.fn(),
	createSVG: jest.fn(),
	destroyDots: jest.fn(),
	initCanvas: jest.fn()
}));

jest.mock('../src/scripts/force.ts', () => ({
	renderForceDirectedGraph: jest.fn()
}));

jest.mock('../src/components/github-skyline', () => jest.fn(() => 'Github Skyline'));

jest.mock('lottie-web', () => ({
	__esModule: true,
	default: {
		loadAnimation: jest.fn()
	}
}));

jest.mock('next/router', () => ({
	useRouter: jest.fn(() => ({
		pathname: '/'
	}))
}));

jest.mock('@vercel/analytics/react', () => ({
	Analytics: jest.fn(() => 'Vercel Analytics')
}));

jest.mock('@vercel/speed-insights/next', () => ({
	SpeedInsights: jest.fn(() => 'Vercel Speed Insights')
}));

jest.spyOn(shared, 'waitForElement').mockReturnValue(Promise.resolve(null));

jest.mock('next/font/google', () => ({
	Fira_Sans: jest.fn(() => ({
		style: {
			fontFamily: 'Fira Sans'
		}
	}))
}));

jest.mock('contentful', () => ({
	...jest.requireActual('contentful'),
	createClient: jest.fn(() => ({
		getContentTypes: jest.fn(() => Promise.resolve([])),
		getEntries: jest.fn(() => Promise.resolve({ items: [] }))
	}))
}));

let counter = 0;

jest.mock('uuid', () => ({
	v4: () => {
		counter += 1;
		return `mock-uuid-${counter}`;
	}
}));
