export type Slide = {
	readonly url: string;
	readonly title: string;
	readonly description: string;
};

export const slides: Slide[] = [
	{
		url: 'https://docs.google.com/presentation/d/e/2PACX-1vSA8qN0_3lb0YWDYJheJ3q0AAsXWlLLpP86pnmV0KWfPo_2G-SSdSK--GVRyJbwT8_kWyJ0TZxFoaH8',
		title: 'EcmaScript Features',
		description: 'Presentation about the EcmaScript language history and features'
	},
	{
		url: 'https://docs.google.com/presentation/d/e/2PACX-1vTivcVmPyjYPdWgoJMChe_rrVyZEIw4ZgF37lCOlxUUm7DchxhMJouEV_BcrH6LDL8kiNmRSIWkiSxK',
		title: 'Do more with Sublime Text',
		description: 'Presentation about improving workflow using Sublime Text editor'
	}
];
