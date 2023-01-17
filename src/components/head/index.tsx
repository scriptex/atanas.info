import type { FC } from 'react';
import NextHead from 'next/head';

import { MetaTag, metaTags, LinkTag, linkTags } from '@data/meta';

export const Head: FC = () => (
	<NextHead>
		{metaTags.map((data: MetaTag, i: number) => (
			<meta {...data} key={i} />
		))}

		{linkTags.map((data: LinkTag, i: number) => (
			<link {...data} key={i} />
		))}
	</NextHead>
);

export default Head;
