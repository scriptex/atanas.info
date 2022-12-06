import * as React from 'react';
import { Link } from 'react-router-dom';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MDXProvider } from '@mdx-js/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import scss from 'react-syntax-highlighter/dist/esm/languages/hljs/scss';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';

import { Routes } from '../../data/routes';
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

interface Props {
	id: string;
	back: Routes;
	title: string;
	image: string;
	content: (props: any) => JSX.Element;
}

export const MDX: React.FC<Readonly<Props>> = ({ id, back, title, image, content: Content }: Props) => {
	useScript('https://atanas-info.disqus.com/embed.js', (script: HTMLScriptElement) => {
		script.setAttribute('data-timestamp', (+new Date()).toString());
	});

	return (
		<Section
			id={id}
			title={title}
			actions={
				<Link to={back} className="c-btn">
					Go back
				</Link>
			}
			hasButton
		>
			<Lines />

			<img src={image} alt="" loading="lazy" />

			<div className="c-blog-post">
				<MDXProvider
					components={{
						br: props => <br {...props} />,
						img: props => <img {...props} />,
						code: (props: any) => {
							const match = /language-(\w+)/.exec(props.className || '');

							return match ? (
								<SyntaxHighlighter language={match[1]} {...props} style={dracula}>
									{props.children}
								</SyntaxHighlighter>
							) : (
								<code className={props.className} {...props} />
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

export default MDX;
