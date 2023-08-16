import type { AppProps } from 'next/app';

import { App } from '@pages/_app';
import { snapshotTest } from '@test-config/helpers';

const env = process.env;
const props = {
	Component: () => <div />,
	pageProps: {}
} as unknown as AppProps;

beforeEach(() => {
	jest.resetModules();
	process.env = { ...env, NEXT_PUBLIC_GTM_ID: 'test-id' };
});

afterEach(() => {
	process.env = env;
});

window.CSS = window.CSS || {
	paintWorklet: {
		addModule: path => path
	}
};

snapshotTest(() => <App {...props} />);
