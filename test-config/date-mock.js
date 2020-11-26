// @ts-nocheck

const constantDate = new Date('2017-12-31T23:59:59');

/**
 * Date constructor will now return
 * the same date each time it is called
 */
global.Date = class extends (
	Date
) {
	constructor() {
		super();
		return constantDate;
	}
};

export const dateMock = new Date().getTime();

export default dateMock;
