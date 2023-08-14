export default {
	plugins: [
		'removeDoctype',
		'removeXMLProcInst',
		'removeComments',
		'removeMetadata',
		'removeEditorsNSData',
		'cleanupAttrs',
		'mergeStyles',
		'inlineStyles',
		'minifyStyles',
		'removeUselessDefs',
		'removeUnknownsAndDefaults',
		'removeUselessStrokeAndFill',
		'cleanupEnableBackground',
		'removeEmptyText',
		'removeEmptyAttrs',
		'convertStyleToAttrs',
		'removeEmptyContainers',
		'removeDimensions',
		{
			name: 'prefixIds',
			params: {
				prefix: () => 'atanas-info-svg'
			}
		}
	]
};
