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
		'lite-youtube': any;
		'codersrank-widget': any;
	}
}

declare module 'react-twitter-embed' {
	export const TwitterTimelineEmbed: any;
}

interface Window {
	dataLayer: {
		push: (...args: any[]) => void;
	};
	msCrypto: any;
}

declare const registerPaint: <T>(name: string, constructor: T) => void;
