import { Button } from '@components';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(Button);
snapshotTest(() => <Button type="anchor" rel="noopener noreferrer" href="https://atanas.info" target="_blank" />);
