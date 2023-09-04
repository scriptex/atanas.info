import type { NextApiRequest, NextApiResponse } from 'next';

const html = `
<html>
<head>
	<style type="text/css">
		.profile-badge {
			width: 100% !important;
		}
	</style>

	<script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
</head>
<body>
	<div
		data-locale="en_US"
		data-size="medium"
		data-theme="dark"
		data-type="VERTICAL"
		data-vanity="scriptex"
		data-version="V1"
		class="badge-base LI-profile-badge"
	></div>
</body>
</html>
`;

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
	res.send(html);
}
