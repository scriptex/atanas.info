import type { FC } from 'react';

import Head from 'next/head';

type Props = {
	text: string;
};

const getTitle = (value: string) => {
	const defaultTitle = 'Atanas Atanasov | Frontend Team Lead and Senior Javascript/Typescript Engineer';
	const uniqueTitle = value ? `${value} | ` : '';

	return `${uniqueTitle}${defaultTitle}`;
};

export const Title: FC<Readonly<Props>> = ({ text }) => (
	<Head>
		<title>{getTitle(text)}</title>
	</Head>
);

export default Title;
