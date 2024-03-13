import { LinkedInBadge, SocialMusic } from '@components';
import type { LastFMAlbum } from '@insights/utils';
import { snapshotTest } from '@test-config/helpers';
import { lastFmInsights } from '@test-config/mocks';

snapshotTest(LinkedInBadge);

snapshotTest(() => <SocialMusic data={lastFmInsights} />, undefined, 'SocialMusic');

snapshotTest(() => <SocialMusic data={{ ...lastFmInsights, topAlbums: [] }} />, undefined, 'SocialMusic');

snapshotTest(() => <SocialMusic data={{ ...lastFmInsights, error: true }} />, undefined, 'SocialMusic');

snapshotTest(
	() => <SocialMusic data={{ ...lastFmInsights, topAlbums: [{} as LastFMAlbum] }} />,
	undefined,
	'SocialMusic'
);
