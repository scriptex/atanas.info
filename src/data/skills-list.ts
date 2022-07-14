// https://glossarytech.com/terms/front_end-technologies

export interface Skill {
	readonly text: string;
	readonly icon: string;
	readonly width: number;
	readonly height: number;
	readonly fill: string;
	readonly since: number;
	readonly iconFill?: string;
}

const defaultSize: Pick<Skill, 'width' | 'height'> = {
	width: 34,
	height: 34
};

export const skills: Skill[] = [
	{ text: 'Adobe Illustrator', icon: 'adobeillustrator', fill: '#FF9A00', since: 2014, ...defaultSize },
	{ text: 'Adobe Photoshop', icon: 'adobephotoshop', fill: '#31A8FF', since: 2012, ...defaultSize },
	{ text: 'Adobe XD', icon: 'adobexd', fill: '#FF61F6', since: 2018, ...defaultSize },
	{ text: 'Affinity Designer', icon: 'affinitydesigner', fill: '#1B72BE', since: 2018, ...defaultSize },
	{ text: 'Agile', icon: 'agile', fill: '#fff', since: 2011, ...defaultSize },
	{ text: 'Amazon Web Services', icon: 'amazonaws', fill: '#232F3E', since: 2019, ...defaultSize },
	{ text: 'Angular', icon: 'angular', fill: '#DD0031', since: 2017, ...defaultSize },
	{ text: 'Angular JS', icon: 'angularjs', fill: '#E23237', since: 2014, ...defaultSize },
	{
		text: 'Apache Cordova',
		icon: 'apachecordova',
		fill: '#E8E8E8',
		since: 2014,
		iconFill: '#000',
		...defaultSize
	},
	{ text: 'Azure DevOps', icon: 'azuredevops', fill: '#0078D7', since: 2019, ...defaultSize },
	{ text: 'Azure Functions', icon: 'azurefunctions', fill: '#0062AD', since: 2019, ...defaultSize },
	{ text: 'Babel', icon: 'babel', fill: '#F9DC3E', since: 2015, iconFill: '#000', ...defaultSize },
	{ text: 'BabylonJS', icon: 'babylonjs', fill: '#fff', since: 2018, ...defaultSize },
	{ text: 'BackboneJS', icon: 'backbonedotjs', fill: '#0071B5', since: 2013, ...defaultSize },
	{ text: 'BEM', icon: 'bem', fill: '#000', since: 2013, ...defaultSize },
	{ text: 'Bootstrap', icon: 'bootstrap', fill: '#7952B3', since: 2012, ...defaultSize },
	{ text: 'Bulma', icon: 'bulma', fill: '#00D1B2', since: 2012, ...defaultSize },
	{ text: 'Canva', icon: 'canva', fill: '#00C4CC', since: 2018, ...defaultSize },
	{ text: 'Chart JS', icon: 'chartdotjs', fill: '#FF6384', since: 2014, ...defaultSize },
	{ text: 'Circle CI', icon: 'circleci', fill: '#343434', since: 2019, ...defaultSize },
	{ text: 'Confluence', icon: 'confluence', fill: '#172B4D', since: 2017, ...defaultSize },
	{ text: 'CSS3', icon: 'css3', fill: '#1572B6', since: 2010, ...defaultSize },
	{ text: 'CSS Modules', icon: 'cssmodules', fill: '#000', since: 2018, ...defaultSize },
	{ text: 'Cypress', icon: 'cypress', fill: '#17202C', since: 2021, ...defaultSize },
	{ text: 'D3.js', icon: 'd3dotjs', fill: '#F9A03C', since: 2012, ...defaultSize },
	{ text: 'Dart', icon: 'dart', fill: '#0175C2', since: 2022, ...defaultSize },
	{ text: 'Deno', icon: 'deno', fill: '#000', since: 2020, ...defaultSize },
	{ text: 'ESLint', icon: 'eslint', fill: '#4B32C3', since: 2016, ...defaultSize },
	{ text: 'Expo', icon: 'expo', fill: '#000020', since: 2019, ...defaultSize },
	{ text: 'Express JS', icon: 'express', fill: '#000', since: 2017, ...defaultSize },
	{ text: 'Figma', icon: 'figma', fill: '#F24E1E', since: 2020, ...defaultSize },
	{ text: 'Firebase', icon: 'firebase', fill: '#FFCA28', since: 2018, iconFill: '#000', ...defaultSize },
	{ text: 'Flutter', icon: 'flutter', fill: '#02569B', since: 2022, ...defaultSize },
	{ text: 'Foundation', icon: 'foundation', width: 24, height: 35, fill: '#141e1f', since: 2013 },
	{ text: 'Gatsby', icon: 'gatsby', fill: '#663399', since: 2019, ...defaultSize },
	{ text: 'GIT', icon: 'git', fill: '#F05032', since: 2011, ...defaultSize },
	{ text: 'Github Actions', icon: 'githubactions', fill: '#2088FF', since: 2020, ...defaultSize },
	{ text: 'Github Pages', icon: 'githubpages', fill: '#222222', since: 2014, ...defaultSize },
	{ text: 'Gitlab CI/CD', icon: 'gitlab', fill: '#FC6D26', since: 2017, ...defaultSize },
	{ text: 'Gnu Bash', icon: 'gnubash', fill: '#4EAA25', since: 2015, ...defaultSize },
	{ text: 'Google Analytics', icon: 'googleanalytics', fill: '#E37400', since: 2018, ...defaultSize },
	{ text: 'Google Chrome', icon: 'googlechrome', fill: '#4285F4', since: 2011, ...defaultSize },
	{ text: 'Google Fonts', icon: 'googlefonts', fill: '#4285F4', since: 2014, ...defaultSize },
	{ text: 'Google Maps', icon: 'googlemaps', fill: '#4285F4', since: 2016, ...defaultSize },
	{ text: 'Google Tag Manager', icon: 'googletagmanager', fill: '#246FDB', since: 2020, ...defaultSize },
	{ text: 'Grunt', icon: 'grunt', fill: '#FAA918', since: 2013, iconFill: '#000', ...defaultSize },
	{ text: 'Gulp', icon: 'gulp', fill: '#CF4647', since: 2013, ...defaultSize },
	{ text: 'Highcharts', icon: 'highcharts', fill: '#3a3a4f', since: 2016, ...defaultSize },
	{ text: 'Homebrew', icon: 'homebrew', fill: '#FBB040', since: 2018, iconFill: '#000', ...defaultSize },
	{ text: 'Houdini', icon: 'houdini', fill: '#FF4713', since: 2020, ...defaultSize },
	{ text: 'HTML5', icon: 'html5', fill: '#E34F26', since: 2010, ...defaultSize },
	{ text: 'i18next', icon: 'i18next', fill: '#26A69A', since: 2018, ...defaultSize },
	{ text: 'Ionic', icon: 'ionic', fill: '#3880FF', since: 2014, ...defaultSize },
	{ text: 'JavaScript', icon: 'javascript', fill: '#F7DF1E', since: 2011, iconFill: '#000', ...defaultSize },
	{ text: 'Jest', icon: 'jest', fill: '#C21325', since: 2017, ...defaultSize },
	{ text: 'Jira', icon: 'jira', fill: '#0052CC', since: 2017, ...defaultSize },
	{ text: 'jQuery', icon: 'jquery', fill: '#0769AD', since: 2011, ...defaultSize },
	{ text: 'JSON', icon: 'json', fill: '#000', since: 2013, ...defaultSize },
	{ text: 'LESS', icon: 'less', fill: '#1D365D', since: 2012, ...defaultSize },
	{ text: 'Linux', icon: 'linux', fill: '#FCC624', since: 2018, iconFill: '#000', ...defaultSize },
	{ text: 'Lodash', icon: 'lodash', fill: '#3492FF', since: 2015, ...defaultSize },
	{ text: 'MacOS', icon: 'macos', fill: '#000', since: 2017, ...defaultSize },
	{ text: 'Mailchimp', icon: 'mailchimp', fill: '#FFE01B', since: 2019, iconFill: '#000', ...defaultSize },
	{ text: 'MAMP', icon: 'mamp', fill: '#02749C', since: 2017, ...defaultSize },
	{ text: 'Markdown', icon: 'markdown', fill: '#000', since: 2014, ...defaultSize },
	{ text: 'MDX', icon: 'mdx', fill: '#1B1F24', since: 2020, ...defaultSize },
	{ text: 'MS Excel', icon: 'microsoftexcel', fill: '#217346', since: 2010, ...defaultSize },
	{ text: 'MS PowerPoint', icon: 'microsoftpowerpoint', fill: '#B7472A', since: 2010, ...defaultSize },
	{ text: 'MS Word', icon: 'microsoftword', fill: '#2B579A', since: 2010, ...defaultSize },
	{ text: 'MJML', icon: 'mjml', fill: '#F25F4A', since: 2019, ...defaultSize },
	{ text: 'Mocha', icon: 'mocha', fill: '#8D6748', since: 2021, ...defaultSize },
	{ text: 'Mongo DB', icon: 'mongodb', fill: '#47A248', since: 2019, ...defaultSize },
	{ text: 'Netlify', icon: 'netlify', fill: '#00C7B7', since: 2019, ...defaultSize },
	{ text: 'Next JS', icon: 'nextdotjs', fill: '#000', since: 2020, ...defaultSize },
	{ text: 'Node JS', icon: 'nodedotjs', fill: '#339933', since: 2016, ...defaultSize },
	{ text: 'Nuxt JS', icon: 'nuxtdotjs', fill: '#00DC82', since: 2018, ...defaultSize },
	{ text: 'Parcel Bundler', icon: 'parcel', fill: '#7d7d7d', since: 2019, ...defaultSize },
	{ text: 'Photopea', icon: 'photopea', fill: '#18A497', since: 2020, ...defaultSize },
	{ text: 'PHP', icon: 'php', fill: '#777BB4', since: 2013, ...defaultSize },
	{ text: 'PostCSS', icon: 'postcss', fill: '#DD3A0A', since: 2014, ...defaultSize },
	{ text: 'Postman', icon: 'postman', fill: '#FF6C37', since: 2019, ...defaultSize },
	{ text: 'Prettier', icon: 'prettier', fill: '#F7B93E', since: 2014, ...defaultSize },
	{ text: 'Puppeteer', icon: 'puppeteer', fill: '#40B5A4', since: 2019, ...defaultSize },
	{ text: 'React', icon: 'react', fill: '#61DAFB', since: 2016, ...defaultSize },
	{ text: 'React Router', icon: 'reactrouter', fill: '#CA4245', since: 2016, ...defaultSize },
	{ text: 'Redux', icon: 'redux', fill: '#764ABC', since: 2016, ...defaultSize },
	{ text: 'Redux Saga', icon: 'reduxsaga', fill: '#999999', since: 2018, ...defaultSize },
	{ text: 'Renovate', icon: 'renovatebot', fill: '#1A1F6C', since: 2017, ...defaultSize },
	{ text: 'Rollup', icon: 'rollupdotjs', fill: '#EC4A3F', since: 2018, ...defaultSize },
	{ text: 'SASS', icon: 'sass', fill: '#CC6699', since: 2012, ...defaultSize },
	{ text: 'Sentry', icon: 'sentry', fill: '#362D59', since: 2019, ...defaultSize },
	{ text: 'Sketch', icon: 'sketch', fill: '#F7B500', since: 2017, ...defaultSize },
	{ text: 'Solidity', icon: 'solidity', fill: '#363636', since: 2022, ...defaultSize },
	{ text: 'Styled Components', icon: 'styledcomponents', fill: '#DB7093', since: 2018, ...defaultSize },
	{ text: 'Stylelint', icon: 'stylelint', fill: '#263238', since: 2017, ...defaultSize },
	{ text: 'Stylus', icon: 'stylus', fill: '#333', since: 2019, ...defaultSize },
	{ text: 'Sublime Text', icon: 'sublimetext', fill: '#FF9800', since: 2010, ...defaultSize },
	{ text: 'Subversion', icon: 'subversion', fill: '#809CC9', since: 2010, ...defaultSize },
	{ text: 'SVG', icon: 'svg', fill: '#FFB13B', since: 2011, ...defaultSize },
	{ text: 'SVGO', icon: 'svgo', fill: '#3E7FC1', since: 2018, ...defaultSize },
	{ text: 'Swagger', icon: 'swagger', fill: '#85EA2D', since: 2019, iconFill: '#000', ...defaultSize },
	{ text: 'Swiper', icon: 'swiper', fill: '#6332F6', since: 2017, ...defaultSize },
	{ text: 'Testing Library', icon: 'testinglibrary', fill: '#E33332', since: 2021, ...defaultSize },
	{ text: 'Travis CI', icon: 'travisci', fill: '#3EAAAF', since: 2017, iconFill: '#000', ...defaultSize },
	{ text: 'TS-Node', icon: 'tsnode', fill: '#3178C6', since: 2020, ...defaultSize },
	{ text: 'Typescript', icon: 'typescript', fill: '#3178C6', since: 2017, ...defaultSize },
	{ text: 'Vercel', icon: 'vercel', fill: '#000', since: 2019, ...defaultSize },
	{ text: 'Visual Studio Code', icon: 'visualstudiocode', fill: '#007ACC', since: 2017, ...defaultSize },
	{ text: 'Vue', icon: 'vuedotjs', fill: '#4FC08D', since: 2016, ...defaultSize },
	{ text: 'Webpack', icon: 'webpack', fill: '#8DD6F9', since: 2015, iconFill: '#000', ...defaultSize },
	{ text: 'WordPress', icon: 'wordpress', fill: '#21759B', since: 2013, ...defaultSize },
	{ text: 'XAMPP', icon: 'xampp', fill: '#FB7A24', since: 2013, ...defaultSize },
	{ text: 'Yarn', icon: 'yarn', fill: '#2C8EBB', since: 2016, ...defaultSize }
];
