import * as React from 'react';

import { Section } from '..';

export const SectionStats: React.FunctionComponent = () => {
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch('/api/get-user')
			.then((res: Response) => res.json())
			.then((data: any) => {
				console.log(data);

				if (data.status && data.status >= 400 && data.status <= 500) {
					setError(true);
				} else {
					setData(data);
				}
			})
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Section id="stats" hasButton={true}>
			<h1>Stats</h1>

			{error && <p>Error getting data from Github.</p>}

			{loading && <p>Loading data from Github...</p>}

			<div className="o-grid">
				<div className="o-grid__item o-grid__item--1of2">
					<h2>
						<a
							href="https://profile.codersrank.io/user/scriptex"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							Codersrank
						</a>{' '}
						Profile
					</h2>

					<codersrank-widget username="scriptex"></codersrank-widget>
				</div>

				{data && (
					<>
						<div className="o-grid__item o-grid__item--1of2"></div>
					</>
				)}
			</div>
		</Section>
	);
};

export default SectionStats;
