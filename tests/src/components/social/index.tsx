import { snapshotTest } from '@test-config/helpers';
import { lastFmInsights } from '@test-config/mocks';
import type { LastFMAlbum } from '@insights/utils';
import { SocialMusic, LinkedInBadge } from '@components';

snapshotTest(LinkedInBadge);

snapshotTest(() => <SocialMusic data={lastFmInsights} />, undefined, 'SocialMusic');

snapshotTest(() => <SocialMusic data={{ ...lastFmInsights, topAlbums: [] }} />, undefined, 'SocialMusic');

snapshotTest(() => <SocialMusic data={{ ...lastFmInsights, error: true }} />, undefined, 'SocialMusic');

snapshotTest(
	() => <SocialMusic data={{ ...lastFmInsights, topAlbums: [{} as LastFMAlbum] }} />,
	undefined,
	'SocialMusic'
);
