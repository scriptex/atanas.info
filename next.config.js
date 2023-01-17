module.exports = {
	webpack(config) {
		config.module.rules = [
			...config.module.rules,
			{
				test: /\.svg$/i,
				type: 'asset',
				resourceQuery: /url/ // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: {
					not: [/url/] // exclude react component if *.svg?url
				},
				use: {
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'removeViewBox',
									active: false
								}
							]
						}
					}
				}
			}
		];

		return config;
	}
};
