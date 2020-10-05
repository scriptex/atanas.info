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
	}
];
