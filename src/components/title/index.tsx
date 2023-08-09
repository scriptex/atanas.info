import Head from 'next/head';
import { FC } from 'react';

type Props = {
	text: string;
};

export const Title: FC<Readonly<Props>> = ({ text }) => (
	<Head>
		<title>{text}</title>
	</Head>
);

export default Title;
