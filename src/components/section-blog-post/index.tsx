/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { match } from 'react-router-dom';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Section } from '..';
import { articles } from '../../data/articles';

interface Params {
	slug: string;
}

interface Props {
	match: match<Params>;
}

export const SectionBlogPost: React.FunctionComponent<Props> = (props: Props) => {
	const {
		params: { slug }
	} = props.match;

	const article = articles.find(({ url }) => url.includes(slug));
	const Content = article?.content;

	return (
		<Section id="blog-post" hasButton={true}>
			<h1>{article?.title}</h1>

			<img src={article?.image} alt="" />

			<div className="c-blog-post">
				<MDXProvider
					components={{
						code: ({ className, ...props }: { className: string }) => {
							const match = /language-(\w+)/.exec(className || '');

							return match ? (
								<SyntaxHighlighter language={match[1]} {...props} style={dracula} />
							) : (
								<code className={className} {...props} />
							);
						}
					}}
				>
					<Content />
				</MDXProvider>
			</div>
		</Section>
	);
};

export default SectionBlogPost;
