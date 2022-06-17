// @ts-nocheck

const { basename } = require('path');

module.exports = {
	process(src, filename, config, options) {
		return {
			code: `module.exports = ${JSON.stringify(basename(filename))};`
		};
	}
};
