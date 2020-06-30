export interface Presentation {
	readonly url: string;
	readonly title: string;
	readonly description: string;
}

export const presentations: Presentation[] = [
	{
		url: 'https://www.youtube.com/embed/5xcqprI17FQ',
		title: 'Do more with Sublime Text',
		description: 'Presentation about optimizing the web development workflow using Sublime Text editor'
	},
	{
		url: 'https://www.youtube.com/embed/s-klXHLIZyY',
		title: 'Jarvis: Frontend project setup',
		description: 'Presentation about the new and optimized frontend projects setup'
	}
];
