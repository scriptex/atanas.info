const { basename } = require('path');

module.exports = {
	process(src, filename) {
		return { code: `module.exports = ${JSON.stringify(basename(filename))};` };
	}
};
