import NextHead from 'next/head';
import type { FC } from 'react';
import { Fira_Sans } from 'next/font/google';

import { MetaTag, metaTags, LinkTag, linkTags } from '@data/meta';

export const titleFont = Fira_Sans({
	weight: ['400', '700'],
	subsets: ['latin', 'cyrillic']
});

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

		<style>{`
			:root {
				--font-pt-sans-narrow: ${titleFont.style.fontFamily};
			}
		`}</style>
	</NextHead>
);

export default Head;
