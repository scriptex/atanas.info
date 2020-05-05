// @ts-nocheck
const fs = require('fs');
const url = require('url');
const path = require('path');
const { argv } = require('yargs');

const MinifyPlugin = require('babel-minify-webpack-plugin');
const magicImporter = require('node-sass-magic-importer');
const { ProvidePlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devURL = argv.URL;
const isServer = argv.SERVER;
const isModern = argv.IS_MODERN;
const isProduction = argv.NODE_ENV === 'production';

const sourceMap = {
	sourceMap: !isProduction
};

const svgoConfig = {
	plugins: [
		{ cleanupAttrs: true },
		{ removeDoctype: true },
		{ removeXMLProcInst: true },
		{ removeComments: true },
		{ removeMetadata: true },
		{ removeUselessDefs: true },
		{ removeEditorsNSData: true },
		{ removeEmptyAttrs: true },
		{ removeHiddenElems: false },
		{ removeEmptyText: true },
		{ removeEmptyContainers: true },
		{ cleanupEnableBackground: true },
		{ removeViewBox: false },
		{ cleanupIDs: false },
		{ convertStyleToAttrs: true },
		{ removeUselessStrokeAndFill: true }
	]
};

const postcssConfig = {
	plugins: [
		require('postcss-easy-import'),
		require('postcss-url')({
			url: 'rebase'
		}),
		require('postcss-utilities'),
		require('postcss-flexbugs-fixes'),
		require('autoprefixer')()
	],
	...sourceMap
};

const babelConfig = isModern => [
	{
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			comments: false,
			presets: [
				[
					'@babel/env',
					{
						corejs: 3,
						modules: false,
						useBuiltIns: 'entry',
						targets: {
							browsers: isModern
								? ['Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15']
								: ['> 1%', 'last 2 versions', 'Firefox ESR']
						}
					}
				]
			],
			plugins: [
				// Stage 2
				['@babel/plugin-proposal-decorators', { legacy: true }],
				'@babel/plugin-proposal-function-sent',
				'@babel/plugin-proposal-export-namespace-from',
				'@babel/plugin-proposal-numeric-separator',
				'@babel/plugin-proposal-throw-expressions',
				// Stage 3
				'@babel/plugin-syntax-dynamic-import',
				'@babel/plugin-syntax-import-meta',
				['@babel/plugin-proposal-class-properties', { loose: false }],
				'@babel/plugin-proposal-json-strings'
			]
		}
	}
];

const browserSyncConfig = {
	host: 'localhost',
	port: 3000,
	open: 'external',
	files: ['**/*.php', '**/*.html', './assets/dist/app.css', './assets/dist/app.js'],
	ghostMode: {
		clicks: false,
		scroll: true,
		forms: {
			submit: true,
			inputs: true,
			toggles: true
		}
	},
	snippetOptions: {
		rule: {
			match: /<\/body>/i,
			fn: (snippet, match) => `${snippet}${match}`
		}
	},
	proxy: 'localhost'
};

const extractTextConfig = {
	filename: 'dist/app.css',
	allChunks: true
};

const cleanConfig = {
	cleanOnceBeforeBuildPatterns: ['dist/*', '!dist/sprite.svg']
};

const shellScripts = [];
const svgs = fs.readdirSync('./assets/images/svg').filter(svg => svg[0] !== '.');

if (svgs.length) {
	shellScripts.push('svgo -f assets/images/svg --config=' + JSON.stringify(svgoConfig));
	shellScripts.push('spritesh -q -i assets/images/svg -o assets/dist/sprite.svg -p svg-');
}

module.exports = env => {
	if (isProduction) {
		postcssConfig.plugins.push(
			require('postcss-merge-rules'),
			require('cssnano')({
				discardComments: {
					removeAll: true
				}
			})
		);
	}

	if (!isProduction) {
		postcssConfig.plugins.push(
			require('postcss-watch-folder')({
				folder: './assets/styles',
				main: './assets/styles/main.scss'
			})
		);
	}

	const config = {
		mode: argv.NODE_ENV,
		entry: ['./assets/styles/main.scss', './assets/scripts/main.js'],
		output: {
			path: path.resolve(__dirname, './assets'),
			filename: isModern ? 'dist/app.m.js' : 'dist/app.js'
		},
		resolve: {
			modules: ['node_modules', './assets/scripts', './assets/images/sprite']
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						use: [
							{
								loader: 'css-loader',
								options: sourceMap
							},
							{
								loader: 'postcss-loader',
								options: postcssConfig
							},
							{
								loader: 'sass-loader',
								options: {
									sassOptions: {
										importer: magicImporter()
									},
									...sourceMap
								}
							}
						],
						fallback: 'style-loader'
					})
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: babelConfig(isModern)
				},
				{
					test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot|wav|mp3|mp4)(\?.*$|$)/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[hash].[ext]',
								context: '',
								publicPath: './',
								outputPath: './dist/'
							}
						}
					]
				}
			]
		},
		plugins: [
			new ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			}),
			new ExtractTextPlugin(extractTextConfig),
			...(!isModern
				? [
						new WebpackShellPlugin({
							onBuildStart: shellScripts
						}),
						new CleanWebpackPlugin(cleanConfig)
				  ]
				: [
						new MinifyPlugin(
							{},
							{
								test: /\.m\.js($|\?)/i,
								comments: false
							}
						)
				  ])
		],
		cache: true,
		bail: false,
		devtool: !isProduction ? 'source-map' : false,
		stats: 'errors-only'
	};

	if (!isProduction) {
		if (devURL) {
			browserSyncConfig.host = url.parse(devURL).hostname;
			browserSyncConfig.proxy = devURL;
		}

		if (isServer) {
			delete browserSyncConfig.host;
			delete browserSyncConfig.proxy;

			browserSyncConfig.server = true;
		}

		config.plugins.push(
			new BrowserSyncPlugin(browserSyncConfig, {
				reload: false
			})
		);
	}

	return config;
};
