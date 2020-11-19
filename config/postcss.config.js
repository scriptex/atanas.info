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
		'postcss-each-variables': true,
		'postcss-each': true,
		'postcss-for': true,
		'postcss-mixins': true,
		'postcss-extend': true,
		'postcss-utilities': true,
		'postcss-flexbugs-fixes': true,
		'postcss-merge-rules': true,
		'postcss-custom-media': true,
		'postcss-calc': true
	}
};
