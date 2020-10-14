// https://glossarytech.com/terms/front_end-technologies

export interface Skill {
	readonly text: string;
	readonly icon: string;
	readonly width: number;
	readonly height: number;
	readonly fill: string;
	readonly since: number;
}

export const skills: Skill[] = [
	{ text: 'Amazon Web Services', icon: 'aws', width: 30, height: 30, fill: '#fff', since: 2019 },
	{ text: 'Angular', icon: 'angular', width: 30, height: 30, fill: '#fff', since: 2017 },
	{ text: 'Angular JS', icon: 'angularjs', width: 30, height: 30, fill: '#fff', since: 2014 },
	{ text: 'BEM', icon: 'bem', width: 30, height: 30, fill: '#000', since: 2013 },
	{ text: 'Babel', icon: 'babel', width: 30, height: 30, fill: '#222', since: 2015 },
	{ text: 'BabylonJS', icon: 'babylonjs', width: 30, height: 30, fill: '#fff', since: 2018 },
	{ text: 'BackboneJS', icon: 'backbone', width: 30, height: 30, fill: '#bdc9ec', since: 2013 },
	{ text: 'Bash', icon: 'bash', width: 30, height: 30, fill: '#48992a', since: 2015 },
	{ text: 'Bootstrap', icon: 'bootstrap', width: 30, height: 30, fill: '#ccc', since: 2012 },
	{ text: 'CSS3', icon: 'css', width: 30, height: 30, fill: '#122858', since: 2010 },
	{ text: 'Chart JS', icon: 'chartjs', width: 30, height: 30, fill: '#7d7d7d', since: 2014 },
	{ text: 'Cordova', icon: 'cordova', width: 30, height: 30, fill: '#97daa8', since: 2014 },
	{ text: 'D3', icon: 'd3', width: 30, height: 30, fill: '#5a4126', since: 2012 },
	{ text: 'ESLint', icon: 'eslint', width: 30, height: 30, fill: '#fff', since: 2016 },
	{ text: 'Express JS', icon: 'expressjs', width: 30, height: 30, fill: '#fff', since: 2017 },
	{ text: 'Firebase', icon: 'firebase', width: 30, height: 30, fill: '#fff', since: 2018 },
	{ text: 'Foundation', icon: 'foundation', width: 30, height: 30, fill: '#141e1f', since: 2103 },
	{ text: 'Gatsby', icon: 'gatsby', width: 30, height: 30, fill: '#663399', since: 2019 },
	{ text: 'GIT', icon: 'git', width: 30, height: 30, fill: '#f9d7d7', since: 2011 },
	{ text: 'Grunt', icon: 'grunt', width: 30, height: 30, fill: '#f39341', since: 2013 },
	{ text: 'Gulp', icon: 'gulp', width: 40, height: 40, fill: '#07267b', since: 2013 },
	{ text: 'HTML5', icon: 'html', width: 30, height: 30, fill: '#52260c', since: 2010 },
	{ text: 'Highcharts', icon: 'highcharts', width: 30, height: 30, fill: '#3a3a4f', since: 2016 },
	{ text: 'Ionic', icon: 'ionic', width: 30, height: 30, fill: '#fff', since: 2014 },
	{ text: 'JavaScript', icon: 'javascript', width: 30, height: 30, fill: '#f0db4f', since: 2011 },
	{ text: 'Jest', icon: 'jest', width: 30, height: 30, fill: '#fff', since: 2017 },
	{ text: 'JSON', icon: 'json', width: 30, height: 30, fill: '#ccc', since: 2013 },
	{ text: 'jQuery', icon: 'jquery', width: 30, height: 30, fill: '#7bdffd', since: 2011 },
	{ text: 'LESS', icon: 'less', width: 30, height: 30, fill: '#b6ecec', since: 2012 },
	{ text: 'Microsoft Azure', icon: 'azure', width: 30, height: 30, fill: '#353134', since: 2019 },
	{ text: 'Node JS', icon: 'nodejs', width: 30, height: 30, fill: '#1d4002', since: 2016 },
	{ text: 'Parcel Bundler', icon: 'parcel', width: 30, height: 30, fill: '#7d7d7d', since: 2019 },
	{ text: 'PHP', icon: 'php', width: 30, height: 30, fill: '#f6c9fb', since: 2013 },
	{ text: 'Photoshop', icon: 'photoshop', width: 30, height: 30, fill: '#333', since: 2010 },
	{ text: 'PostCSS', icon: 'postcss', width: 30, height: 30, fill: '#b0f1dc', since: 2014 },
	{ text: 'React', icon: 'react', width: 30, height: 30, fill: '#fff', since: 2016 },
	{ text: 'Redux', icon: 'redux', width: 30, height: 30, fill: '#222', since: 2016 },
	{ text: 'Redux Saga', icon: 'redux-saga', width: 30, height: 30, fill: '#9c3b2d', since: 2018 },
	{ text: 'Rollup', icon: 'rollup', width: 30, height: 30, fill: '#f7f7f7', since: 2018 },
	{ text: 'SASS', icon: 'sass', width: 30, height: 30, fill: '#faf4cf', since: 2012 },
	{ text: 'SVG', icon: 'svg', width: 30, height: 30, fill: '#ffb13b', since: 2011 },
	{ text: 'SVN', icon: 'svn', width: 30, height: 30, fill: '#2b1306', since: 2010 },
	{ text: 'Sketch', icon: 'sketch', width: 30, height: 30, fill: '#291212', since: 2017 },
	{ text: 'Sublime Text', icon: 'sublime-text', width: 30, height: 30, fill: '#4d4d4e', since: 2010 },
	{ text: 'Typescript', icon: 'typescript', width: 30, height: 30, fill: '#007ACC', since: 2017 },
	{ text: 'Vercel', icon: 'vercel', width: 30, height: 30, fill: '#000', since: 2019 },
	{ text: 'Visual Studio Code', icon: 'vscode', width: 30, height: 30, fill: '#fff', since: 2017 },
	{ text: 'Vue', icon: 'vue', width: 30, height: 30, fill: '#4a5c71', since: 2016 },
	{ text: 'Webpack', icon: 'webpack', width: 30, height: 30, fill: '#0d2748', since: 2015 },
	{ text: 'WordPress', icon: 'wordpress', width: 30, height: 30, fill: '#111', since: 2013 }
];
