import NextHead from 'next/head';
import type { FC } from 'react';
import { Fira_Sans } from 'next/font/google';

import { MetaTag, metaTags, LinkTag, linkTags } from '@data/meta';

const customStyle = `
@font-face {
	font-family: 'fontello';
	src: url('/fonts/fontello.eot?73938081');
	src: url('/fonts/fontello.eot?73938081#iefix') format('embedded-opentype'),
		url('/fonts/fontello.woff2?73938081') format('woff2'), url('/fonts/fontello.woff?73938081') format('woff'),
		url('/fonts/fontello.ttf?73938081') format('truetype'),
		url('/fonts/fontello.svg?73938081#fontello') format('svg');
	font-weight: normal;
	font-style: normal;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
	@font-face {
		font-family: 'fontello';
		src: url('/fonts/fontello.svg?73938081#fontello') format('svg');
	}
}`;

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

		{metaTags.map((data: MetaTag, i: number) => (
			<meta {...data} key={i} />
		))}

		{linkTags.map((data: LinkTag, i: number) => (
			<link {...data} key={i} />
		))}

		<style id="icon-font" type="text/css" dangerouslySetInnerHTML={{ __html: customStyle }} />

		<style>{`
			:root {
				--font-pt-sans-narrow: ${titleFont.style.fontFamily};
			}
		`}</style>
	</NextHead>
);

export default Head;
