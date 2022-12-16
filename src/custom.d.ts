declare module '*.svg' {
	const content: string;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.ico' {
	const content: string;
	export default content;
}

declare module '*.json' {
	const content: string;
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

interface Window {
	msCrypto: any;
	dataLayer: {
		push: (...args: any[]) => void;
	};
}

declare const registerPaint: <T>(name: string, constructor: T) => void;

declare module '*.mdx' {
	let MDXComponent: (props: any) => JSX.Element;
	export default MDXComponent;
}

declare namespace CSS {
	namespace paintWorklet {
		export function addModule(url: URL): void;
	}
}

declare module '*.md' {
	const attributes: Record<string, unknown>;

	const toc: { level: string; content: string }[];

	const html: string;

	import React from 'react';

	const ReactComponent: React.FC;

	export { attributes, toc, html, ReactComponent };
}

interface ImportMetaEnv {
	readonly GTM_ID: string;
	readonly MODE: 'development' | 'production';
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
