module.exports = {
	plugins: [
		'cleanupAttrs',
		'removeDoctype',
		'removeXMLProcInst',
		'removeComments',
		'removeMetadata',
		'removeUselessDefs',
		'removeEditorsNSData',
		'removeEmptyAttrs',
		'removeEmptyText',
		'removeEmptyContainers',
		'cleanupEnableBackground',
		'convertStyleToAttrs',
		'removeUselessStrokeAndFill',
		'removeDimensions',
		{
			name: 'removeViewBox',
			enabled: false
		},
		{
			name: 'cleanupIDs',
			active: true,
			params: {
				prefix: {
					toString() {
						this.counter = this.counter || 0;

						return `svgo-viewbox-id-${this.counter++}`;
					}
				}
			}
		}
	]
};
