/**
 * Mock a date which is created with the `new Date()` constructor.
 *
 * Usage:
 *
 * import { onBeforeEach, onAfterEach } from '@tools/utils/jest';
 *
 * describe('', () => {
 *     beforeEach(onBeforeEach);
 *     afterEach(onAfterEach);
 *
 *     ...
 * });
 */
const DateConstructor = Date;
const globalObject = global as any;

const date = new Date();

date.setDate(2);
date.setMonth(2);

export const onBeforeEach = (): void => {
	globalObject.Date = jest.fn((...props) => {
		if (props.length) {
			return new DateConstructor(...(props as []));
		}

		return new DateConstructor(date);
	});

	globalObject.Date.UTC = DateConstructor.UTC;

	Object.assign(Date, DateConstructor);
};

export const onAfterEach = (): void => {
	global.Date = DateConstructor;
};
