import { ExternalLink } from '@components';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(ExternalLink);

snapshotTest(() => <ExternalLink href="https://atanas.info" target="_blank" />, 'ExternalLink');
