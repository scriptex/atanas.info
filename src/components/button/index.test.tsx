import * as React from 'react';

import { Button } from '.';
import { snapshotTest } from '../test-helpers';

const ButtonSubmit: React.FC = () => (
	<Button type="submit" className="button" onClick={jest.fn()}>
		Button
	</Button>
);

const ButtonReset: React.FC = () => (
	<Button type="reset" onClick={jest.fn()}>
		Button
	</Button>
);

const ButtonLink: React.FC = () => (
	<Button type="link" className="link" href="https://google.com" rel="noopener noreferrrer" target="_blank">
		Link
	</Button>
);

snapshotTest(ButtonSubmit);
snapshotTest(ButtonReset);
snapshotTest(ButtonLink);
