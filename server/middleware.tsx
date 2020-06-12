import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { printDrainHydrateMarks } from 'react-imported-component';

import App from '../src/components/app';
import generateHtml from './generate';

// eslint-disable-next-line
export default (req: Request, res: any): void => {
	const context: any = {};

	const markup = ReactDOM.renderToString(
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);

	if (context.url) {
		res.redirect(301, context.url);
	} else {
		const html = generateHtml(markup + printDrainHydrateMarks());

		res.send(html);
	}
};
