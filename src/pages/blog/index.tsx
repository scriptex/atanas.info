import Link from 'next/link';
import type { FC } from 'react';

import book from '@data/lotties/book.json';
import { articles, Article } from '@data/articles';
import { Layout, Loader, Section, Animation, Title } from '@components';

export const blogProps = {
	style: { backgroundImage: 'url(images/temp/articles.jpg)' },
	className: 'c-section--slides fullsize-background',
	hasButton: true,
	additionalElements: <Animation data={book} width={150} height={150} className="c-section__animation" />
};

export const Blog: FC = () => (
	<Layout>
		<Title text="Blog | Atanas Atanasov | Senior Javascript/Typescript Engineer" />

		<Section id="blog" title="Blog" {...blogProps}>
			<div className="c-section__body o-grid">
				{articles
					.filter((article: Article) => !article.external)
					.map((article: Article) => (
						<div key={article.index} className="o-grid__item xs-12 sm-6">
							<Link
								href={article.url}
								style={{ backgroundImage: `url(${article.image})` }}
								className="c-article-link fullsize-background"
							>
								<strong>{article.title}</strong>
							</Link>

							<Loader />
						</div>
					))}
			</div>
		</Section>
	</Layout>
);

export default Blog;
