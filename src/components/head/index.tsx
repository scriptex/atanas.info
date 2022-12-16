import * as React from 'react';
import { Helmet } from 'react-helmet';

import { MetaTag, metaTags, LinkTag, linkTags } from '@data/meta';

export const Head: React.FC = () => (
	<Helmet>
		{metaTags.map((data: MetaTag, i: number) => (
			<meta {...data} key={i} />
		))}

		{linkTags.map((data: LinkTag, i: number) => (
			<link {...data} key={i} />
		))}
	</Helmet>
);

export default Head;
