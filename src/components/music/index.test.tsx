import { Music } from '.';
import { snapshotTest } from '../test-helpers';

Object.defineProperty(global.window.HTMLMediaElement.prototype, 'load', {
	configurable: true,
	get() {
		return () => undefined;
	}
});

snapshotTest(Music);
