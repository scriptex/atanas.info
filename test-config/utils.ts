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

export const randomDate = '2018-12-31T23:59:59.000Z';

export const onBeforeEach = (): void => {
	globalObject.Date = jest.fn((...props) => {
		if (props.length) {
			// @ts-ignore
			return new DateConstructor(...props);
		}

		return new DateConstructor(randomDate);
	});

	globalObject.Date.UTC = DateConstructor.UTC;

	Object.assign(Date, DateConstructor);
};

export const onAfterEach = (): void => {
	global.Date = DateConstructor;
};
