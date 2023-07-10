import NextHead from 'next/head';
import type { FC } from 'react';

import { MetaTag, metaTags, LinkTag, linkTags } from '@data/meta';

export const Head: FC = () => (
	<NextHead>
		<meta
			name="viewport"
			content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
		/>

		{metaTags.map((data: MetaTag) => (
			<meta {...data} key={data.index} />
		))}

		{linkTags.map((data: LinkTag) => (
			<link {...data} key={data.index} />
		))}
	</NextHead>
);

export default Head;
