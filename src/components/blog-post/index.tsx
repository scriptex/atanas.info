import * as React from 'react';
import { Link } from 'react-router-dom';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import scss from 'react-syntax-highlighter/dist/esm/languages/hljs/scss';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';

import { Routes } from '../../data/routes';
import { articles } from '../../data/articles';
import { useScript } from '../../scripts/shared';
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

export const BlogPost: React.FC = () => {
	const { slug } = useParams();

	const article = articles.find(({ url }) => url.includes(slug!));
	const Content = article?.content;

	useScript('https://atanas-info.disqus.com/embed.js', (script: HTMLScriptElement) => {
		script.setAttribute('data-timestamp', (+new Date()).toString());
	});

	return (
		<Section
			id="blog-post"
			title={article?.title}
			actions={
				<Link to={Routes.BLOG} className="c-btn">
					Go back
				</Link>
			}
			hasButton
		>
			<Lines />

			<img src={article?.image} alt="" loading="lazy" />

			<div className="c-blog-post">
				<MDXProvider
					components={{
						code: ({ className, ...props }: Record<string, 'className' | 'children'>) => {
							const match = /language-(\w+)/.exec(className || '');

							return match ? (
								<SyntaxHighlighter language={match[1]} {...props} style={dracula}>
									{props.children}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props} />
							);
						}
					}}
				>
					<Content />
				</MDXProvider>

				<div id="disqus_thread" />
			</div>
		</Section>
	);
};

export default BlogPost;
