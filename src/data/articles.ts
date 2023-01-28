export type Article = {
	readonly url: string;
	readonly title: string;
	readonly image: string;
	readonly external: boolean;
};

export const articles: Article[] = [
	{
		url: 'https://htmlburger.com/blog/jarvis-task-runner/',
		title: 'Jarvis: The Intelligent Front-End Task Runner',
		image: 'https://htmlburger.com/blog/wp-content/uploads/2017/11/jarvis-Recovered-2-826x464.jpg',
		external: true
	},
	{
		url: 'https://htmlboutique.com/blog/2015/11/13/ionic-development-by-htmlboutique/',
		title: 'Ionic Development by htmlBoutique',
		image: 'https://htmlboutique.com/blog/wp-content/uploads/2015/11/ionicnew3.jpg',
		external: true
	},
	{
		url: '/blog/bulk-image-watermark-with-nodejs-and-jimp',
		title: 'Bulk image watermark with NodeJS and Jimp',
		image: '/images/temp/bulk-image-watermark-with-nodejs-and-jimp.jpg',
		external: false
	},
	{
		url: '/blog/running-multiple-webpack-based-applications-simultaneously',
		title: 'Running multiple Webpack based applications simultaneously',
		image: '/images/temp/running-multiple-webpack-based-applications-simultaneously.png',
		external: false
	},
	{
		url: '/blog/testing-websockets-with-cypress',
		title: 'Testing WebSockets with Cypress',
		image: '/images/temp/testing-websockets-with-cypress.png',
		external: false
	}
];
