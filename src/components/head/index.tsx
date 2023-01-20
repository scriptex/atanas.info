import type { FC } from 'react';
import NextHead from 'next/head';

import { MetaTag, metaTags, LinkTag, linkTags } from '@data/meta';

export const Head: FC = () => (
	<NextHead>
		<meta
			name="viewport"
			content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
		/>

		{metaTags.map((data: MetaTag, i: number) => (
			<meta {...data} key={i} />
		))}

		{linkTags.map((data: LinkTag, i: number) => (
			<link {...data} key={i} />
		))}
	</NextHead>
);

export default Head;
