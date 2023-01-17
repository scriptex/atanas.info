import type { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export const Document: FC = () => (
	<Html lang="en">
		<Head />

		<body>
			<Main />

			<NextScript />
		</body>
	</Html>
);

export default Document;
