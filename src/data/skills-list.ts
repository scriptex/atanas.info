export type ForceNode = {
	readonly url?: string;
	readonly fill: string;
	readonly icon: string;
	readonly text: string;
	readonly width: number;
	readonly since?: number;
	readonly height: number;
	readonly iconFill?: string;
};

export const defaultForceNodeSize: Pick<ForceNode, 'width' | 'height'> = {
	width: 34,
	height: 34
};

export const skills: ForceNode[] = [
	{
		text: 'Adobe Illustrator',
		icon: 'adobeillustrator',
		fill: '#FF9A00',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'Adobe Photoshop',
		icon: 'adobephotoshop',
		fill: '#31A8FF',
		since: 2012,
		...defaultForceNodeSize
	},
	{
		text: 'Adobe XD',
		icon: 'adobexd',
		fill: '#FF61F6',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Affinity Designer',
		icon: 'affinitydesigner',
		fill: '#1B72BE',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Agile',
		icon: 'agile',
		fill: '#fff',
		since: 2011,
		...defaultForceNodeSize
	},
	{
		text: 'Amazon Web Services',
		icon: 'amazonaws',
		fill: '#232F3E',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Angular',
		icon: 'angular',
		fill: '#DD0031',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Angular JS',
		icon: 'angularjs',
		fill: '#E23237',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'Apache Cordova',
		icon: 'apachecordova',
		fill: '#E8E8E8',
		since: 2014,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'Azure DevOps',
		icon: 'azuredevops',
		fill: '#0078D7',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Azure Functions',
		icon: 'azurefunctions',
		fill: '#0062AD',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Babel',
		icon: 'babel',
		fill: '#F9DC3E',
		since: 2015,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'BabylonJS',
		icon: 'babylonjs',
		fill: '#fff',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'BackboneJS',
		icon: 'backbonedotjs',
		fill: '#0071B5',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'BEM',
		icon: 'bem',
		fill: '#000',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'Bootstrap',
		icon: 'bootstrap',
		fill: '#7952B3',
		since: 2012,
		...defaultForceNodeSize
	},
	{
		text: 'Bulma',
		icon: 'bulma',
		fill: '#00D1B2',
		since: 2012,
		...defaultForceNodeSize
	},
	{
		text: 'Canva',
		icon: 'canva',
		fill: '#00C4CC',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Chart JS',
		icon: 'chartdotjs',
		fill: '#FF6384',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'Circle CI',
		icon: 'circleci',
		fill: '#343434',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Confluence',
		icon: 'confluence',
		fill: '#172B4D',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Contentful',
		icon: 'contentful',
		fill: '#2478CC',
		since: 2023,
		...defaultForceNodeSize
	},
	{
		text: 'CSS3',
		icon: 'css3',
		fill: '#1572B6',
		since: 2010,
		...defaultForceNodeSize
	},
	{
		text: 'CSS Modules',
		icon: 'cssmodules',
		fill: '#000',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Cypress',
		icon: 'cypress',
		fill: '#17202C',
		since: 2021,
		...defaultForceNodeSize
	},
	{
		text: 'D3.js',
		icon: 'd3dotjs',
		fill: '#F9A03C',
		since: 2012,
		...defaultForceNodeSize
	},
	{
		text: 'Dart',
		icon: 'dart',
		fill: '#0175C2',
		since: 2022,
		...defaultForceNodeSize
	},
	{
		text: 'Deno',
		icon: 'deno',
		fill: '#000',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'ESLint',
		icon: 'eslint',
		fill: '#4B32C3',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'Expo',
		icon: 'expo',
		fill: '#000020',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Express JS',
		icon: 'express',
		fill: '#000',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Figma',
		icon: 'figma',
		fill: '#F24E1E',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'Firebase',
		icon: 'firebase',
		fill: '#FFCA28',
		since: 2018,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'Flutter',
		icon: 'flutter',
		fill: '#02569B',
		since: 2022,
		...defaultForceNodeSize
	},
	{
		text: 'Foundation',
		icon: 'foundation',
		width: 24,
		height: 35,
		fill: '#141e1f',
		since: 2013
	},
	{
		text: 'Gatsby',
		icon: 'gatsby',
		fill: '#663399',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'GIT',
		icon: 'git',
		fill: '#F05032',
		since: 2011,
		...defaultForceNodeSize
	},
	{
		text: 'Github Actions',
		icon: 'githubactions',
		fill: '#2088FF',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'Github Pages',
		icon: 'githubpages',
		fill: '#222222',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'Gitlab CI/CD',
		icon: 'gitlab',
		fill: '#FC6D26',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Gnu Bash',
		icon: 'gnubash',
		fill: '#4EAA25',
		since: 2015,
		...defaultForceNodeSize
	},
	{
		text: 'Google Analytics',
		icon: 'googleanalytics',
		fill: '#E37400',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Google Chrome',
		icon: 'googlechrome',
		fill: '#4285F4',
		since: 2011,
		...defaultForceNodeSize
	},
	{
		text: 'Google Fonts',
		icon: 'googlefonts',
		fill: '#4285F4',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'Google Maps',
		icon: 'googlemaps',
		fill: '#4285F4',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'Google Tag Manager',
		icon: 'googletagmanager',
		fill: '#246FDB',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'Grunt',
		icon: 'grunt',
		fill: '#FAA918',
		since: 2013,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'Gulp',
		icon: 'gulp',
		fill: '#CF4647',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'Handlebars',
		icon: 'handlebarsdotjs',
		fill: '#000000',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'Highcharts',
		icon: 'highcharts',
		fill: '#3a3a4f',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'Homebrew',
		icon: 'homebrew',
		fill: '#FBB040',
		since: 2018,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'Houdini',
		icon: 'houdini',
		fill: '#FF4713',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'HTML5',
		icon: 'html5',
		fill: '#E34F26',
		since: 2010,
		...defaultForceNodeSize
	},
	{
		text: 'i18next',
		icon: 'i18next',
		fill: '#26A69A',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Ionic',
		icon: 'ionic',
		fill: '#3880FF',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'Javascript',
		icon: 'javascript',
		fill: '#F7DF1E',
		since: 2011,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'Jest',
		icon: 'jest',
		fill: '#C21325',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Jira',
		icon: 'jira',
		fill: '#0052CC',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'jQuery',
		icon: 'jquery',
		fill: '#0769AD',
		since: 2011,
		...defaultForceNodeSize
	},
	{
		text: 'JSON',
		icon: 'json',
		fill: '#000',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'LESS',
		icon: 'less',
		fill: '#1D365D',
		since: 2012,
		...defaultForceNodeSize
	},
	{
		text: 'Linux',
		icon: 'linux',
		fill: '#FCC624',
		since: 2018,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'Lodash',
		icon: 'lodash',
		fill: '#3492FF',
		since: 2015,
		...defaultForceNodeSize
	},
	{
		text: 'MacOS',
		icon: 'macos',
		fill: '#000',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Mailchimp',
		icon: 'mailchimp',
		fill: '#FFE01B',
		since: 2019,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'MAMP',
		icon: 'mamp',
		fill: '#02749C',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Markdown',
		icon: 'markdown',
		fill: '#000',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'MDX',
		icon: 'mdx',
		fill: '#1B1F24',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'MS Excel',
		icon: 'microsoftexcel',
		fill: '#217346',
		since: 2010,
		...defaultForceNodeSize
	},
	{
		text: 'MS PowerPoint',
		icon: 'microsoftpowerpoint',
		fill: '#B7472A',
		since: 2010,
		...defaultForceNodeSize
	},
	{
		text: 'MS Word',
		icon: 'microsoftword',
		fill: '#2B579A',
		since: 2010,
		...defaultForceNodeSize
	},
	{
		text: 'MJML',
		icon: 'mjml',
		fill: '#F25F4A',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Mocha',
		icon: 'mocha',
		fill: '#8D6748',
		since: 2021,
		...defaultForceNodeSize
	},
	{
		text: 'Mongo DB',
		icon: 'mongodb',
		fill: '#47A248',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Netlify',
		icon: 'netlify',
		fill: '#00C7B7',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Next JS',
		icon: 'nextdotjs',
		fill: '#000',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'Node JS',
		icon: 'nodedotjs',
		fill: '#339933',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'Nuxt JS',
		icon: 'nuxtdotjs',
		fill: '#00DC82',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Parcel Bundler',
		icon: 'parcel',
		fill: '#7d7d7d',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Photopea',
		icon: 'photopea',
		fill: '#18A497',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'PHP',
		icon: 'php',
		fill: '#777BB4',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'PostCSS',
		icon: 'postcss',
		fill: '#DD3A0A',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'PostgreSQL',
		icon: 'postgresql',
		fill: '#4169E1',
		since: 2023,
		...defaultForceNodeSize
	},
	{
		text: 'PostHTML',
		icon: 'posthtml',
		fill: '#fff',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'Postman',
		icon: 'postman',
		fill: '#FF6C37',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Prettier',
		icon: 'prettier',
		fill: '#F7B93E',
		since: 2014,
		...defaultForceNodeSize
	},
	{
		text: 'Prisma',
		icon: 'prisma',
		fill: '#2D3748',
		since: 2023,
		...defaultForceNodeSize
	},
	{
		text: 'Preact',
		icon: 'preact',
		fill: '#673AB8',
		since: 2022,
		...defaultForceNodeSize
	},
	{
		text: 'Puppeteer',
		icon: 'puppeteer',
		fill: '#40B5A4',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'React',
		icon: 'react',
		fill: '#61DAFB',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'React Router',
		icon: 'reactrouter',
		fill: '#CA4245',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'Redux',
		icon: 'redux',
		fill: '#764ABC',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'Redux Saga',
		icon: 'reduxsaga',
		fill: '#999999',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Renovate',
		icon: 'renovatebot',
		fill: '#1A1F6C',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Rollup',
		icon: 'rollupdotjs',
		fill: '#EC4A3F',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'SASS',
		icon: 'sass',
		fill: '#CC6699',
		since: 2012,
		...defaultForceNodeSize
	},
	{
		text: 'Sentry',
		icon: 'sentry',
		fill: '#362D59',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Sketch',
		icon: 'sketch',
		fill: '#F7B500',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Solidity',
		icon: 'solidity',
		fill: '#363636',
		since: 2022,
		...defaultForceNodeSize
	},
	{
		text: 'Styled Components',
		icon: 'styledcomponents',
		fill: '#DB7093',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Stylelint',
		icon: 'stylelint',
		fill: '#263238',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Stylus',
		icon: 'stylus',
		fill: '#333',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Sublime Text',
		icon: 'sublimetext',
		fill: '#FF9800',
		since: 2010,
		...defaultForceNodeSize
	},
	{
		text: 'Subversion',
		icon: 'subversion',
		fill: '#809CC9',
		since: 2010,
		...defaultForceNodeSize
	},
	{
		text: 'SVG',
		icon: 'svg',
		fill: '#FFB13B',
		since: 2011,
		...defaultForceNodeSize
	},
	{
		text: 'SVGO',
		icon: 'svgo',
		fill: '#3E7FC1',
		since: 2018,
		...defaultForceNodeSize
	},
	{
		text: 'Swagger',
		icon: 'swagger',
		fill: '#85EA2D',
		since: 2019,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'Swiper',
		icon: 'swiper',
		fill: '#6332F6',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Tailwind CSS',
		icon: 'tailwindcss',
		fill: '#06B6D4',
		since: 2023,
		...defaultForceNodeSize
	},
	{
		text: 'Testing Library',
		icon: 'testinglibrary',
		fill: '#E33332',
		since: 2021,
		...defaultForceNodeSize
	},
	{
		text: 'Travis CI',
		icon: 'travisci',
		fill: '#3EAAAF',
		since: 2017,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'TS-Node',
		icon: 'tsnode',
		fill: '#3178C6',
		since: 2020,
		...defaultForceNodeSize
	},
	{
		text: 'Typescript',
		icon: 'typescript',
		fill: '#3178C6',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Vercel',
		icon: 'vercel',
		fill: '#000',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Visual Studio Code',
		icon: 'visualstudiocode',
		fill: '#007ACC',
		since: 2017,
		...defaultForceNodeSize
	},
	{
		text: 'Vite',
		icon: 'vite',
		fill: '#646CFF',
		since: 2022,
		...defaultForceNodeSize
	},
	{
		text: 'Vue',
		icon: 'vuedotjs',
		fill: '#4FC08D',
		since: 2016,
		...defaultForceNodeSize
	},
	{
		text: 'VuePress',
		icon: 'vuepress',
		fill: '#4FC08D',
		since: 2019,
		...defaultForceNodeSize
	},
	{
		text: 'Webpack',
		icon: 'webpack',
		fill: '#8DD6F9',
		since: 2015,
		iconFill: '#000',
		...defaultForceNodeSize
	},
	{
		text: 'WordPress',
		icon: 'wordpress',
		fill: '#21759B',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'XAMPP',
		icon: 'xampp',
		fill: '#FB7A24',
		since: 2013,
		...defaultForceNodeSize
	},
	{
		text: 'Yarn',
		icon: 'yarn',
		fill: '#2C8EBB',
		since: 2016,
		...defaultForceNodeSize
	}
];
