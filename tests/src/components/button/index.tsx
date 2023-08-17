import { Button } from '@components';
import { Routes } from '@data/routes';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => (
	<Button type="link" href={Routes.ABOUT}>
		This is an internal link button
	</Button>
));

snapshotTest(() => <Button type="button">This is a regular button</Button>);

snapshotTest(() => (
	<Button type="anchor" rel="noopener noreferrer" href="https://atanas.info" target="_blank">
		This is an external link button
	</Button>
));
