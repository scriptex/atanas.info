import * as React from 'react';

import { ExternalLink } from '.';
import { snapshotTest } from '../test-helpers';

jest.mock('..', () => ({
	...jest.requireActual('..'),
	Animation: jest.fn(() => <div>Mocked animation</div>),
	ExternalLink: jest.fn(() => <div>Mocked external link</div>),
	Icon: jest.fn(() => <div>Mocked icon</div>)
}));

afterAll(() => {
	jest.resetAllMocks();
});

snapshotTest(ExternalLink);
