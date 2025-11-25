export type ForceNode = Readonly<{
	fill: string;
	height: number;
	icon: string;
	iconFill?: string;
	since?: number;
	text: string;
	url?: string;
	width: number;
}>;

export const defaultForceNodeSize: Pick<ForceNode, 'height' | 'width'> = {
	height: 34,
	width: 34
};

export const skills: ForceNode[] = [
	{
		fill: '#FF9A00',
		icon: 'adobeillustrator',
		since: 2014,
		text: 'Adobe Illustrator',
		...defaultForceNodeSize
	},
	{
		fill: '#31A8FF',
		icon: 'adobephotoshop',
		since: 2012,
		text: 'Adobe Photoshop',
		...defaultForceNodeSize
	},
	{
		fill: '#FF61F6',
		icon: 'adobexd',
		since: 2018,
		text: 'Adobe XD',
		...defaultForceNodeSize
	},
	{
		fill: '#1B72BE',
		icon: 'affinitydesigner',
		since: 2018,
		text: 'Affinity Designer',
		...defaultForceNodeSize
	},
	{
		fill: '#fff',
		icon: 'agile',
		since: 2011,
		text: 'Agile',
		...defaultForceNodeSize
	},
	{
		fill: '#232F3E',
		icon: 'amazonaws',
		since: 2019,
		text: 'Amazon Web Services',
		...defaultForceNodeSize
	},
	{
		fill: '#DD0031',
		icon: 'angular',
		since: 2017,
		text: 'Angular',
		...defaultForceNodeSize
	},
	{
		fill: '#E23237',
		icon: 'angularjs',
		since: 2014,
		text: 'Angular JS',
		...defaultForceNodeSize
	},
	{
		fill: '#E8E8E8',
		icon: 'apachecordova',
		iconFill: '#000',
		since: 2014,
		text: 'Apache Cordova',
		...defaultForceNodeSize
	},
	{
		fill: '#0078D7',
		icon: 'azuredevops',
		since: 2019,
		text: 'Azure DevOps',
		...defaultForceNodeSize
	},
	{
		fill: '#0062AD',
		icon: 'azurefunctions',
		since: 2019,
		text: 'Azure Functions',
		...defaultForceNodeSize
	},
	{
		fill: '#F9DC3E',
		icon: 'babel',
		iconFill: '#000',
		since: 2015,
		text: 'Babel',
		...defaultForceNodeSize
	},
	{
		fill: '#fff',
		icon: 'babylonjs',
		since: 2018,
		text: 'BabylonJS',
		...defaultForceNodeSize
	},
	{
		fill: '#0071B5',
		icon: 'backbonedotjs',
		since: 2013,
		text: 'BackboneJS',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'bem',
		since: 2013,
		text: 'BEM',
		...defaultForceNodeSize
	},
	{
		fill: '#7952B3',
		icon: 'bootstrap',
		since: 2012,
		text: 'Bootstrap',
		...defaultForceNodeSize
	},
	{
		fill: '#00D1B2',
		icon: 'bulma',
		since: 2012,
		text: 'Bulma',
		...defaultForceNodeSize
	},
	{
		fill: '#00C4CC',
		icon: 'canva',
		since: 2018,
		text: 'Canva',
		...defaultForceNodeSize
	},
	{
		fill: '#FF6384',
		icon: 'chartdotjs',
		since: 2014,
		text: 'Chart JS',
		...defaultForceNodeSize
	},
	{
		fill: '#343434',
		icon: 'circleci',
		since: 2019,
		text: 'Circle CI',
		...defaultForceNodeSize
	},
	{
		fill: '#7B68EE',
		icon: 'clickup',
		since: 2024,
		text: 'ClickUp',
		...defaultForceNodeSize
	},
	{
		fill: '#172B4D',
		icon: 'confluence',
		since: 2017,
		text: 'Confluence',
		...defaultForceNodeSize
	},
	{
		fill: '#2478CC',
		icon: 'contentful',
		since: 2023,
		text: 'Contentful',
		...defaultForceNodeSize
	},
	{
		fill: '#1572B6',
		icon: 'css3',
		since: 2010,
		text: 'CSS3',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'cssmodules',
		since: 2018,
		text: 'CSS Modules',
		...defaultForceNodeSize
	},
	{
		fill: '#17202C',
		icon: 'cypress',
		since: 2021,
		text: 'Cypress',
		...defaultForceNodeSize
	},
	{
		fill: '#F9A03C',
		icon: 'd3dotjs',
		since: 2012,
		text: 'D3.js',
		...defaultForceNodeSize
	},
	{
		fill: '#0175C2',
		icon: 'dart',
		since: 2022,
		text: 'Dart',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'deno',
		since: 2020,
		text: 'Deno',
		...defaultForceNodeSize
	},
	{
		fill: '#4B32C3',
		icon: 'eslint',
		since: 2016,
		text: 'ESLint',
		...defaultForceNodeSize
	},
	{
		fill: '#000020',
		icon: 'expo',
		since: 2019,
		text: 'Expo',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'express',
		since: 2017,
		text: 'Express JS',
		...defaultForceNodeSize
	},
	{
		fill: '#F24E1E',
		icon: 'figma',
		since: 2020,
		text: 'Figma',
		...defaultForceNodeSize
	},
	{
		fill: '#FFCA28',
		icon: 'firebase',
		iconFill: '#000',
		since: 2018,
		text: 'Firebase',
		...defaultForceNodeSize
	},
	{
		fill: '#02569B',
		icon: 'flutter',
		since: 2022,
		text: 'Flutter',
		...defaultForceNodeSize
	},
	{
		fill: '#141e1f',
		height: 35,
		icon: 'foundation',
		since: 2013,
		text: 'Foundation',
		width: 24
	},
	{
		fill: '#663399',
		icon: 'gatsby',
		since: 2019,
		text: 'Gatsby',
		...defaultForceNodeSize
	},
	{
		fill: '#F05032',
		icon: 'git',
		since: 2011,
		text: 'GIT',
		...defaultForceNodeSize
	},
	{
		fill: '#2088FF',
		icon: 'githubactions',
		since: 2020,
		text: 'Github Actions',
		...defaultForceNodeSize
	},
	{
		fill: '#222222',
		icon: 'githubpages',
		since: 2014,
		text: 'Github Pages',
		...defaultForceNodeSize
	},
	{
		fill: '#FC6D26',
		icon: 'gitlab',
		since: 2017,
		text: 'Gitlab CI/CD',
		...defaultForceNodeSize
	},
	{
		fill: '#4EAA25',
		icon: 'gnubash',
		since: 2015,
		text: 'Gnu Bash',
		...defaultForceNodeSize
	},
	{
		fill: '#E37400',
		icon: 'googleanalytics',
		since: 2018,
		text: 'Google Analytics',
		...defaultForceNodeSize
	},
	{
		fill: '#4285F4',
		icon: 'googlechrome',
		since: 2011,
		text: 'Google Chrome',
		...defaultForceNodeSize
	},
	{
		fill: '#4285F4',
		icon: 'googlefonts',
		since: 2014,
		text: 'Google Fonts',
		...defaultForceNodeSize
	},
	{
		fill: '#4285F4',
		icon: 'googlemaps',
		since: 2016,
		text: 'Google Maps',
		...defaultForceNodeSize
	},
	{
		fill: '#246FDB',
		icon: 'googletagmanager',
		since: 2020,
		text: 'Google Tag Manager',
		...defaultForceNodeSize
	},
	{
		fill: '#FAA918',
		icon: 'grunt',
		iconFill: '#000',
		since: 2013,
		text: 'Grunt',
		...defaultForceNodeSize
	},
	{
		fill: '#CF4647',
		icon: 'gulp',
		since: 2013,
		text: 'Gulp',
		...defaultForceNodeSize
	},
	{
		fill: '#000000',
		icon: 'handlebarsdotjs',
		since: 2013,
		text: 'Handlebars',
		...defaultForceNodeSize
	},
	{
		fill: '#3a3a4f',
		icon: 'highcharts',
		since: 2016,
		text: 'Highcharts',
		...defaultForceNodeSize
	},
	{
		fill: '#FBB040',
		icon: 'homebrew',
		iconFill: '#000',
		since: 2018,
		text: 'Homebrew',
		...defaultForceNodeSize
	},
	{
		fill: '#FF4713',
		icon: 'houdini',
		since: 2020,
		text: 'Houdini',
		...defaultForceNodeSize
	},
	{
		fill: '#E34F26',
		icon: 'html5',
		since: 2010,
		text: 'HTML5',
		...defaultForceNodeSize
	},
	{
		fill: '#26A69A',
		icon: 'i18next',
		since: 2018,
		text: 'i18next',
		...defaultForceNodeSize
	},
	{
		fill: '#3880FF',
		icon: 'ionic',
		since: 2014,
		text: 'Ionic',
		...defaultForceNodeSize
	},
	{
		fill: '#F7DF1E',
		icon: 'javascript',
		iconFill: '#000',
		since: 2011,
		text: 'Javascript',
		...defaultForceNodeSize
	},
	{
		fill: '#C21325',
		icon: 'jest',
		since: 2017,
		text: 'Jest',
		...defaultForceNodeSize
	},
	{
		fill: '#0052CC',
		icon: 'jira',
		since: 2017,
		text: 'Jira',
		...defaultForceNodeSize
	},
	{
		fill: '#0769AD',
		icon: 'jquery',
		since: 2011,
		text: 'jQuery',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'json',
		since: 2013,
		text: 'JSON',
		...defaultForceNodeSize
	},
	{
		fill: '#1D365D',
		icon: 'less',
		since: 2012,
		text: 'LESS',
		...defaultForceNodeSize
	},
	{
		fill: '#FCC624',
		icon: 'linux',
		iconFill: '#000',
		since: 2018,
		text: 'Linux',
		...defaultForceNodeSize
	},
	{
		fill: '#3492FF',
		icon: 'lodash',
		since: 2015,
		text: 'Lodash',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'macos',
		since: 2017,
		text: 'MacOS',
		...defaultForceNodeSize
	},
	{
		fill: '#FFE01B',
		icon: 'mailchimp',
		iconFill: '#000',
		since: 2019,
		text: 'Mailchimp',
		...defaultForceNodeSize
	},
	{
		fill: '#02749C',
		icon: 'mamp',
		since: 2017,
		text: 'MAMP',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'markdown',
		since: 2014,
		text: 'Markdown',
		...defaultForceNodeSize
	},
	{
		fill: '#1B1F24',
		icon: 'mdx',
		since: 2020,
		text: 'MDX',
		...defaultForceNodeSize
	},
	{
		fill: '#050038',
		icon: 'miro',
		since: 2022,
		text: 'Miro',
		...defaultForceNodeSize
	},
	{
		fill: '#217346',
		icon: 'microsoftexcel',
		since: 2010,
		text: 'MS Excel',
		...defaultForceNodeSize
	},
	{
		fill: '#B7472A',
		icon: 'microsoftpowerpoint',
		since: 2010,
		text: 'MS PowerPoint',
		...defaultForceNodeSize
	},
	{
		fill: '#2B579A',
		icon: 'microsoftword',
		since: 2010,
		text: 'MS Word',
		...defaultForceNodeSize
	},
	{
		fill: '#F25F4A',
		icon: 'mjml',
		since: 2019,
		text: 'MJML',
		...defaultForceNodeSize
	},
	{
		fill: '#8D6748',
		icon: 'mocha',
		since: 2021,
		text: 'Mocha',
		...defaultForceNodeSize
	},
	{
		fill: '#47A248',
		icon: 'mongodb',
		since: 2019,
		text: 'Mongo DB',
		...defaultForceNodeSize
	},
	{
		fill: '#00C7B7',
		icon: 'netlify',
		since: 2019,
		text: 'Netlify',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'nextdotjs',
		since: 2020,
		text: 'Next JS',
		...defaultForceNodeSize
	},
	{
		fill: '#339933',
		icon: 'nodedotjs',
		since: 2016,
		text: 'Node JS',
		...defaultForceNodeSize
	},
	{
		fill: '#00DC82',
		icon: 'nuxtdotjs',
		since: 2018,
		text: 'Nuxt JS',
		...defaultForceNodeSize
	},
	{
		fill: '#7d7d7d',
		icon: 'parcel',
		since: 2019,
		text: 'Parcel Bundler',
		...defaultForceNodeSize
	},
	{
		fill: '#18A497',
		icon: 'photopea',
		since: 2020,
		text: 'Photopea',
		...defaultForceNodeSize
	},
	{
		fill: '#777BB4',
		icon: 'php',
		since: 2013,
		text: 'PHP',
		...defaultForceNodeSize
	},
	{
		fill: '#fff',
		icon: 'playwright',
		since: 2024,
		text: 'Playwright',
		...defaultForceNodeSize
	},
	{
		fill: '#DD3A0A',
		icon: 'postcss',
		since: 2014,
		text: 'PostCSS',
		...defaultForceNodeSize
	},
	{
		fill: '#4169E1',
		icon: 'postgresql',
		since: 2023,
		text: 'PostgreSQL',
		...defaultForceNodeSize
	},
	{
		fill: '#fff',
		icon: 'posthtml',
		since: 2016,
		text: 'PostHTML',
		...defaultForceNodeSize
	},
	{
		fill: '#FF6C37',
		icon: 'postman',
		since: 2019,
		text: 'Postman',
		...defaultForceNodeSize
	},
	{
		fill: '#F7B93E',
		icon: 'prettier',
		since: 2014,
		text: 'Prettier',
		...defaultForceNodeSize
	},
	{
		fill: '#2D3748',
		icon: 'prisma',
		since: 2023,
		text: 'Prisma',
		...defaultForceNodeSize
	},
	{
		fill: '#673AB8',
		icon: 'preact',
		since: 2022,
		text: 'Preact',
		...defaultForceNodeSize
	},
	{
		fill: '#40B5A4',
		icon: 'puppeteer',
		since: 2019,
		text: 'Puppeteer',
		...defaultForceNodeSize
	},
	{
		fill: '#61DAFB',
		icon: 'react',
		since: 2016,
		text: 'React',
		...defaultForceNodeSize
	},
	{
		fill: '#EC5990',
		icon: 'reacthookform',
		since: 2020,
		text: 'React Hook Form',
		...defaultForceNodeSize
	},
	{
		fill: '#CA4245',
		icon: 'reactrouter',
		since: 2016,
		text: 'React Router',
		...defaultForceNodeSize
	},
	{
		fill: '#764ABC',
		icon: 'redux',
		since: 2016,
		text: 'Redux',
		...defaultForceNodeSize
	},
	{
		fill: '#999999',
		icon: 'reduxsaga',
		since: 2018,
		text: 'Redux Saga',
		...defaultForceNodeSize
	},
	{
		fill: '#1A1F6C',
		icon: 'renovatebot',
		since: 2017,
		text: 'Renovate',
		...defaultForceNodeSize
	},
	{
		fill: '#EC4A3F',
		icon: 'rollupdotjs',
		since: 2018,
		text: 'Rollup',
		...defaultForceNodeSize
	},
	{
		fill: '#CC6699',
		icon: 'sass',
		since: 2012,
		text: 'SASS',
		...defaultForceNodeSize
	},
	{
		fill: '#362D59',
		icon: 'sentry',
		since: 2019,
		text: 'Sentry',
		...defaultForceNodeSize
	},
	{
		fill: '#F7B500',
		icon: 'sketch',
		since: 2017,
		text: 'Sketch',
		...defaultForceNodeSize
	},
	{
		fill: '#363636',
		icon: 'solidity',
		since: 2022,
		text: 'Solidity',
		...defaultForceNodeSize
	},
	{
		fill: '#FF4785',
		icon: 'storybook',
		since: 2022,
		text: 'Storybook',
		...defaultForceNodeSize
	},
	{
		fill: '#DB7093',
		icon: 'styledcomponents',
		since: 2018,
		text: 'Styled Components',
		...defaultForceNodeSize
	},
	{
		fill: '#263238',
		icon: 'stylelint',
		since: 2017,
		text: 'Stylelint',
		...defaultForceNodeSize
	},
	{
		fill: '#333',
		icon: 'stylus',
		since: 2019,
		text: 'Stylus',
		...defaultForceNodeSize
	},
	{
		fill: '#FF9800',
		icon: 'sublimetext',
		since: 2010,
		text: 'Sublime Text',
		...defaultForceNodeSize
	},
	{
		fill: '#809CC9',
		icon: 'subversion',
		since: 2010,
		text: 'Subversion',
		...defaultForceNodeSize
	},
	{
		fill: '#FFB13B',
		icon: 'svg',
		since: 2011,
		text: 'SVG',
		...defaultForceNodeSize
	},
	{
		fill: '#3E7FC1',
		icon: 'svgo',
		since: 2018,
		text: 'SVGO',
		...defaultForceNodeSize
	},
	{
		fill: '#85EA2D',
		icon: 'swagger',
		iconFill: '#000',
		since: 2019,
		text: 'Swagger',
		...defaultForceNodeSize
	},
	{
		fill: '#6332F6',
		icon: 'swiper',
		since: 2017,
		text: 'Swiper',
		...defaultForceNodeSize
	},
	{
		fill: '#06B6D4',
		icon: 'tailwindcss',
		since: 2023,
		text: 'Tailwind CSS',
		...defaultForceNodeSize
	},
	{
		fill: '#E33332',
		icon: 'testinglibrary',
		since: 2021,
		text: 'Testing Library',
		...defaultForceNodeSize
	},
	{
		fill: '#3EAAAF',
		icon: 'travisci',
		iconFill: '#000',
		since: 2017,
		text: 'Travis CI',
		...defaultForceNodeSize
	},
	{
		fill: '#3178C6',
		icon: 'tsnode',
		since: 2020,
		text: 'TS-Node',
		...defaultForceNodeSize
	},
	{
		fill: '#3178C6',
		icon: 'typescript',
		since: 2017,
		text: 'Typescript',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'vercel',
		since: 2019,
		text: 'Vercel',
		...defaultForceNodeSize
	},
	{
		fill: '#007ACC',
		icon: 'visualstudiocode',
		since: 2017,
		text: 'Visual Studio Code',
		...defaultForceNodeSize
	},
	{
		fill: '#646CFF',
		icon: 'vite',
		since: 2022,
		text: 'Vite',
		...defaultForceNodeSize
	},
	{
		fill: '#4FC08D',
		icon: 'vuedotjs',
		since: 2016,
		text: 'Vue',
		...defaultForceNodeSize
	},
	{
		fill: '#4FC08D',
		icon: 'vuepress',
		since: 2019,
		text: 'VuePress',
		...defaultForceNodeSize
	},
	{
		fill: '#8DD6F9',
		icon: 'webpack',
		iconFill: '#000',
		since: 2015,
		text: 'Webpack',
		...defaultForceNodeSize
	},
	{
		fill: '#21759B',
		icon: 'wordpress',
		since: 2013,
		text: 'WordPress',
		...defaultForceNodeSize
	},
	{
		fill: '#FB7A24',
		icon: 'xampp',
		since: 2013,
		text: 'XAMPP',
		...defaultForceNodeSize
	},
	{
		fill: '#2C8EBB',
		icon: 'yarn',
		since: 2016,
		text: 'Yarn',
		...defaultForceNodeSize
	}
];
