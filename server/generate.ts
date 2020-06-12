import { join } from 'path';
import { readFileSync } from 'fs';

import cheerio from 'cheerio';
import { Helmet } from 'react-helmet';

const templatePath = join(__dirname, '..', 'src', 'index.html');
const HTML_TEMPLATE = readFileSync(templatePath).toString();

export default function generate(markup: string): string {
	const helmet = Helmet.renderStatic();

	const $template = cheerio.load(HTML_TEMPLATE);

	$template('head').append(helmet.title.toString() + helmet.meta.toString() + helmet.link.toString());
	$template('#app').html(markup);

	return $template.html();
}
