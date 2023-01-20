// @ts-ignore
module.exports = {
	// @ts-ignore
	process(_, filename) {
		return { code: `module.exports = ${JSON.stringify(require('path').basename(filename))};` };
	}
};
