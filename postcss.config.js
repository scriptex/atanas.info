module.exports = {
	plugins: {
		'postcss-preset-env': {
			stage: 1,
			features: {
				'color-mod-function': {
					importFrom: 'src/index.pcss'
				}
			}
		},
		autoprefixer: true,
		'postcss-import': true,
		'postcss-mixins': true,
		'postcss-flexbugs-fixes': true,
		'postcss-merge-rules': true,
		'postcss-custom-media': true
		// cssnano: {
		// 	discardComments: {
		// 		removeAll: true
		// 	}
		// }
	}
};
