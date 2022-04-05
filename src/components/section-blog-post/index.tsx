/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { match } from 'react-router-dom';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import scss from 'react-syntax-highlighter/dist/esm/languages/hljs/scss';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';

import { articles } from '../../data/articles';
import { Lines, Section } from '..';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('sh', shell);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('shell', shell);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('typescript', ts);

interface Params {
	slug: string;
}

interface Props {
	match: match<Params>;
}

export const SectionBlogPost: React.FC<Props> = (props: Props) => {
	const {
		params: { slug }
	} = props.match;

	const article = articles.find(({ url }) => url.includes(slug));
	const Content = article?.content;

	return (
		<Section id="blog-post" hasButton={true}>
			<Lines />

			<h1>{article?.title}</h1>

			<img src={article?.image} alt="" />

			<div className="c-blog-post">
				<MDXProvider
					components={{
						code: ({ className, ...props }: { className?: string }) => {
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
