export type Presentation = {
	readonly id: string;
	readonly url: string;
	readonly index: number;
	readonly title: string;
	readonly description: string;
};

export const presentations: Presentation[] = [
	{
		id: '5xcqprI17FQ',
		url: 'https://www.youtube.com/embed/5xcqprI17FQ',
		index: 0,
		title: 'Do more with Sublime Text',
		description: 'Presentation about optimizing the web development workflow using Sublime Text editor'
	},
	{
		id: 's-klXHLIZyY',
		url: 'https://www.youtube.com/embed/s-klXHLIZyY',
		index: 1,
		title: 'Jarvis: Frontend project setup',
		description: 'Presentation about the new and optimized frontend projects setup'
	}
];
