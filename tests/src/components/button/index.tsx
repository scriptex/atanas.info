import { Button } from '@components';

import { Routes } from '@data/routes';

import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => (
	<Button href={Routes.ABOUT} type="link">
		This is an internal link button
	</Button>
));

snapshotTest(() => <Button type="button">This is a regular button</Button>);

snapshotTest(() => (
	<Button href="https://atanas.info" rel="noopener noreferrer" target="_blank" type="anchor">
		This is an external link button
	</Button>
));
