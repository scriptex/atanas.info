import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
	swSrc: 'src/sw.ts',
	swDest: 'public/sw.js'
});

export default withSerwist({
	images: {
		domains: ['res.cloudinary.com', 'images.ctfassets.net', 'media.licdn.com'],
		unoptimized: true
	},
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
});
