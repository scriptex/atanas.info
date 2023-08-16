import { Button } from '@components';
import { Routes } from '@data/routes';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(() => <Button<'link'> type="link" href={Routes.ABOUT} />);
snapshotTest(() => <Button<'button'> type="button"></Button>);
snapshotTest(() => (
	<Button<'anchor'> type="anchor" rel="noopener noreferrer" href="https://atanas.info" target="_blank" />
));
