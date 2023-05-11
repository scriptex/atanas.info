import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';
import markdownItPrism from 'markdown-it-prism';

const MarkdownIt = new markdownIt({
	html: true
}).use(markdownItPrism);

export const markdownToHtml = (markdown: string): string => MarkdownIt.render(markdown);

export const postsDirectory = (folder: string): string => join(process.cwd(), folder);

export const getPostSlugs = (folder: string): string[] => {
	return fs.readdirSync(postsDirectory(folder)).filter(file => !file.startsWith('.'));
};

export const getPostBySlug = (folder: string, slug: string, fields: string[] = []): Record<string, string> => {
	const items: Record<string, string> = {};
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory(folder), `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	fields.forEach(field => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = markdownToHtml(content);
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
};

export const getAllPosts = (folder: string, fields: string[] = []): Array<Record<string, string>> => {
	return getPostSlugs(folder).map(slug => getPostBySlug(folder, slug, fields));
};
