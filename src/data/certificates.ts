export interface Certificate {
	readonly type: string;
	readonly name: string;
	readonly date: string;
}

export const certificates: Certificate[] = [
	{ type: 'html', name: 'HTML', date: '24th August 2020' },
	{ type: 'javascript', name: 'Javascript', date: '24th August 2020' },
	{ type: 'python', name: 'Python', date: '24th August 2020' },
	{ type: 'react', name: 'React Development', date: '24th August 2020' },
	{ type: 'css', name: 'CSS', date: '11th November 2020' },
	{ type: 'deno', name: 'Deno', date: '28th November 2020' }
];
