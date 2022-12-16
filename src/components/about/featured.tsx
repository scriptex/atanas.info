import * as React from 'react';

import { ExternalLink } from '@components';

export const FeaturedAbout: React.FC = () => (
	<div className="c-article__block">
		<h3>Featured</h3>

		<span className="c-article__block-emoji">🎉 🎉 🎉</span>

		<p>
			My <ExternalLink href="https://scriptex.tk/">interactive resume</ExternalLink>, which is built using the{' '}
			<ExternalLink href="https://docs.codersrank.io/widgets/">CodersRank widgets</ExternalLink>, is featured in
			the{' '}
			<ExternalLink href="https://blog.codersrank.io/10-inspiring-developer-websites-and-profile-pages/">
				CodersRank blog
			</ExternalLink>{' '}
			!!!
		</p>

		<p>
			My <ExternalLink href="https://profile.codersrank.io/user/scriptex/">CodersRank profile</ExternalLink> is
			featured in the{' '}
			<ExternalLink href="https://codersrank.io/for-companies/">CodersRank candidate platform</ExternalLink>
			!!!
			<br />
			Feel free to check{' '}
			<ExternalLink href="https://codersrank.io/wp-content/uploads/2020/09/CR-search.mp4">
				the video
			</ExternalLink>{' '}
			out!
		</p>

		<span className="c-article__block-emoji">🎉 🎉 🎉</span>
	</div>
);

export default FeaturedAbout;
