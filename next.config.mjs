import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
	swSrc: 'src/sw.ts',
	swDest: 'public/sw.js'
});

export default withSerwist({
	images: {
		remotePatterns: [
			{ hostname: 'res.cloudinary.com' },
			{ hostname: 'images.ctfassets.net' },
			{ hostname: 'media.licdn.com' },
			{ hostname: 'lastfm.freetls.fastly.net' }
		],
		unoptimized: true
	},
	// These pages read Markdown from disk at runtime (lib/markdown.ts). Without this the files
	// are not bundled into the Vercel function, so regenerating the pages fails with ENOENT.
	outputFileTracingIncludes: {
		'/blog/[slug]': ['./src/data/posts/**/*.md'],
		'/portfolio/open-source/[slug]': ['./src/data/open-source-projects/**/*.md']
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
