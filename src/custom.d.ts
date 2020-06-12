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
		'codersrank-widget': any;
	}
}

interface Window {
	dataLayer: {
		push: (...args: any[]) => void;
	};
}
