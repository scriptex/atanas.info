declare module 'scriptex-socials';

declare module '*.svg?url' {
	const content: string;
	export default content;
}

declare module '@codersrank/activity/codersrank-activity.min' {
	const content: string;
	export default content;
}

declare module '@codersrank/education/codersrank-education.min' {
	const content: string;
	export default content;
}

declare module '@codersrank/portfolio/codersrank-portfolio.min' {
	const content: string;
	export default content;
}

declare module '@codersrank/skills-chart/codersrank-skills-chart.min' {
	const content: string;
	export default content;
}

declare module '@codersrank/summary/codersrank-summary.min' {
	const content: string;
	export default content;
}

declare module '@codersrank/work-experience/codersrank-work-experience.min' {
	const content: string;
	export default content;
}

declare module '@codersrank/timeline/codersrank-timeline.min' {
	const content: string;
	export default content;
}

declare namespace React {
	namespace JSX {
		interface IntrinsicElements {
			'codersrank-activity': HTMLAttributes;
			'codersrank-education': HTMLAttributes;
			'codersrank-portfolio': HTMLAttributes;
			'codersrank-skills-chart': HTMLAttributes;
			'codersrank-summary': HTMLAttributes;
			'codersrank-timeline': HTMLAttributes;
			'codersrank-widget': HTMLAttributes;
			'codersrank-work-experience': HTMLAttributes;
			'social-links': HTMLAttributes;
		}
	}
}

declare namespace CSS {
	namespace paintWorklet {
		export function addModule(url: URL): void;
	}
}

interface Window {
	dataLayer: {
		push: (...args: any[]) => void;
	};
	kofiWidgetOverlay: {
		draw: (username: string, settings: Record<string, string>) => null;
	};
}

type ClassLike<T> = new (...args: unknown[]) => T;

declare const registerPaint: (name: string, fn: ClassLike<unknown>) => void;
