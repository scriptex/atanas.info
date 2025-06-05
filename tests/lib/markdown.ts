import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { getAllPosts, getPostBySlug, getPostSlugs, markdownToHtml, postsDirectory } from '@lib/markdown';

const postsFolder = 'src/data/posts';

it('Test the `markdownToHtml` function', () => {
	const result = markdownToHtml(`# Hello World`);

	expect(result).toBeDefined();
	expect(typeof result).toEqual('string');
	expect(result).toContain('h1');
	expect(result).toContain('Hello World');
});

it('Test the `postsDirectory` function', () => {
	expect(postsDirectory(postsFolder)).toEqual(join(process.cwd(), postsFolder));
});

it('Test the `getPostSlugs` function', () => {
	expect(getPostSlugs(postsFolder)).toHaveLength(6);
});

it('Test the `getPostBySlug` function', () => {
	const post = 'testing-websockets-with-cypress';
	const content = markdownToHtml(readFileSync(join(process.cwd(), postsFolder, `${post}.md`), 'utf-8'));

	expect(getPostBySlug(postsFolder, post)).toEqual({});
	expect(getPostBySlug(postsFolder, post, ['slug'])).toEqual({ slug: post });
	expect(getPostBySlug(postsFolder, post, ['slug', 'content'])).toEqual({ content, slug: post });
	expect(getPostBySlug(postsFolder, post, ['slug', 'content', 'date'])).toEqual({ content, slug: post });
});

it('Test the `getAllPosts` function', () => {
	const result = getAllPosts(postsFolder, ['slug']);

	expect(result).toHaveLength(6);

	for (const item of result) {
		expect(item.slug).toBeDefined();
		expect(typeof item.slug).toEqual('string');
	}
});
