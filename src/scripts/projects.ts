export interface Project {
	readonly url: string;
	readonly image: string;
	readonly title: string;
	readonly description: string;
	readonly timeout?: number;
}

export const projects: Project[] = [
	{
		url: 'https://app.home.eon.com/',
		image: 'images/temp/eon-home.png',
		title: 'E.ON Home',
		description: 'TypeScript, SCSS, React, Redux, MS Azure, NodeJS'
	},
	{
		url: 'https://hems-admin-portal.eon.ooo/',
		image: 'images/temp/eon-hems.png',
		title: 'E.ON H.E.M.S (Home Energy Management System)',
		description: 'TypeScript, SCSS, Angular, Redux, MS Azure, NodeJS',
		timeout: 5000
	},
	{
		url: '',
		image: 'images/temp/atelier-coolinar.png',
		title: 'Atelier Coolinar (Ателие Кулинар)',
		description: 'HTML5, CSS3, JavaScript, WordPress'
	},
	{
		url: 'http://emailio.com/',
		image: 'images/temp/emailio.png',
		title: 'Emailio Web Application',
		description: 'SCSS, JavaScript, React, Redux, Redux Saga'
	},
	{
		url: '',
		image: 'images/temp/faraon-bg.png',
		title: 'Faraon (Фараон)',
		description: 'HTML5, CSS3, JavaScript, jQuery, PHP'
	},
	{
		url: 'https://www.nulla.tv/',
		image: 'images/temp/nulla-tv.png',
		title: 'Nulla TV',
		description: 'HTML5, CSS3, JavaScript, WordPress'
	},
	{
		url: 'https://www.sod.bg/',
		image: 'images/temp/sod-bg.png',
		title: 'SOD 64 (СОД 64)',
		description: 'HTML5, CSS3, JavaScript, jQuery, PHP'
	},
	{
		url: 'https://three-11.com/',
		image: 'images/temp/three-11.png',
		title: 'Three 11',
		description: 'HTML5, CSS3, SVG, JavaScript, D3'
	},
	{
		url: '',
		image: 'images/temp/x-form.png',
		title: 'X Form',
		description: 'HTML5, CSS3, JavaScript, WordPress'
	},
	{
		url: 'https://kinetikautomotive.com/custom-interface',
		image: 'images/temp/kinetik-automotive.png',
		title: 'Kinetik Automotive',
		description: 'HTML5, CSS3, JavaScript, Vue, Nuxt, WordPress'
	},
	{
		url: 'https://xpndnow.com/',
		image: 'images/temp/xpnd.png',
		title: 'XPND',
		description: 'TypeScript, SCSS, React, Redux, NodeJS'
	},
	{
		url: 'https://xpndnow.com/ebook',
		image: 'images/temp/xpnd.png',
		title: 'XPND Ebook',
		description: 'TypeScript, SCSS, React, Redux, NodeJS'
	},
	{
		url: 'https://demo.xpndnow.com/',
		image: 'images/temp/xpnd.png',
		title: 'XPND demo application',
		description: 'TypeScript, SCSS, React, Redux, NodeJS'
	},
	{
		url: 'https://at-the-wall.atanas.info',
		image: 'images/temp/at-the-wall.png',
		title: 'At the Wall',
		description: 'CSS3, PHP'
	},
	{
		url: 'https://snake.atanas.info',
		image: 'images/temp/material-snake.png',
		title: 'Material Snake',
		description: 'TypeScript, HTML, CSS3'
	},
	{
		url: 'https://tetris.atanas.info',
		image: 'images/temp/material-tetris.png',
		title: 'Material Tetris',
		description: 'TypeScript, HTML, CSS3'
	},
	{
		url: 'https://scriptex.js.org/2048',
		image: 'images/temp/2048.png',
		title: '2048',
		description: 'TypeScript, HTML, CSS3'
	},
	{
		url: 'https://retirement-calc.now.sh/',
		image: 'images/temp/retirement-calculator.png',
		title: 'Retirement calculator',
		description: 'JavaScript, SCSS, Vue, Vuex, Chart JS'
	},
	{
		url: 'https://paternalism-tool.now.sh/',
		image: 'images/temp/paternalism-tool.png',
		title: 'Paternalism tool',
		description: 'JavaScript, SCSS, React, Redux, Redux Saga'
	},
	{
		url: 'https://fertility-tool.now.sh/',
		image: 'images/temp/fertility-tool.png',
		title: 'Fertility tool',
		description: 'TypeScript, SCSS, React, Redux, Redux Saga'
	},
	{
		url: 'https://imgn.now.sh/',
		image: 'images/temp/imgn.png',
		title: 'IMGN',
		description: 'TypeScript, SCSS, React, Redux, Redux Saga'
	},
	{
		url: 'https://financial-shocks.now.sh/',
		image: 'images/temp/financial-shocks.png',
		title: 'Financial shocks',
		description: 'TypeScript, SCSS, React, Redux, Redux Saga, Laravel'
	}
];
