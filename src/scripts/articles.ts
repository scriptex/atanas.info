export interface Article {
	readonly url: string;
	readonly title: string;
	readonly image: string;
}

export const articles: Article[] = [
	{
		url: 'https://htmlburger.com/blog/jarvis-task-runner/',
		title: 'Jarvis: The Intelligent Front-End Task Runner',
		image: 'https://htmlburger.com/blog/wp-content/uploads/2017/11/jarvis-Recovered-2-826x464.jpg'
	},
	{
		url: 'https://htmlboutique.com/blog/2015/11/13/ionic-development-by-htmlboutique/',
		title: 'Ionic Development by htmlBoutique',
		image: 'https://htmlboutique.com/blog/wp-content/uploads/2015/11/ionicnew3.jpg'
	},
        {
		url: 'https://scriptexbg.wordpress.com/2021/03/11/bulk-image-watermark-with-nodejs-and-jimp/',
		title: 'Bulk image watermark with NodeJS and Jimp',
		image: 'https://scriptexbg.files.wordpress.com/2021/03/3phjrjs.jpg'
	},
	{
		url: 'https://scriptexbg.wordpress.com/2021/02/19/running-multiple-webpack-based-applications-simultaneously/',
		title: 'Running multiple Webpack based applications simultaneously',
		image: 'https://scriptexbg.files.wordpress.com/2021/02/nodejs-1.png'
	}
];
