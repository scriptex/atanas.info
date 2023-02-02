import type { FC } from 'react';

import { EmptyPage } from '@components';

export const OfflinePage: FC = () => (
	<EmptyPage>
		<div className="c-error-page__content">
			<h1>No internet</h1>

			<p>It looks like you&apos;re offline...</p>

			<p>Please connect to the internet and try again.</p>
		</div>
	</EmptyPage>
);

export default OfflinePage;
