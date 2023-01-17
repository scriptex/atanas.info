declare module '*.svg?url' {
	const content: string;
	export default content;
}

declare module '@codersrank/activity/codersrank-activity.min' {
	const content: any;
	export default content;
}

declare module '@codersrank/education/codersrank-education.min' {
	const content: any;
	export default content;
}

declare module '@codersrank/portfolio/codersrank-portfolio.min' {
	const content: any;
	export default content;
}

declare module '@codersrank/skills-chart/codersrank-skills-chart.min' {
	const content: any;
	export default content;
}

declare module '@codersrank/summary/codersrank-summary.min' {
	const content: any;
	export default content;
}

declare module '@codersrank/work-experience/codersrank-work-experience.min' {
	const content: any;
	export default content;
}

declare module '@codersrank/timeline/codersrank-timeline.min' {
	const content: any;
	export default content;
}

declare namespace JSX {
	interface IntrinsicElements {
		'social-links': any;
		'codersrank-widget': any;
		'codersrank-summary': any;
		'codersrank-timeline': any;
		'codersrank-activity': any;
		'codersrank-education': any;
		'codersrank-portfolio': any;
		'codersrank-skills-chart': any;
		'codersrank-work-experience': any;
	}
}

declare namespace CSS {
	namespace paintWorklet {
		export function addModule(url: URL): void;
	}
}

interface Window {
	msCrypto: any;
	dataLayer: {
		push: (...args: any[]) => void;
	};
}
