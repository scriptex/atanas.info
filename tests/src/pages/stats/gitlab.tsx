import { act } from 'react';

import { GitlabStats } from '@pages/stats/gitlab';

import type { GitlabInsights } from '@scripts/types';
import { snapshotTest, test } from '@test-config/helpers';
import { funding, partners, resumeOwner } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

const dataFull: GitlabInsights = {
	calendar: {
		'2022-02-03': 1
	},
	error: false,
	general: {
		createdAt: '2018-01-03T11:47:34.435Z',
		repos: 119,
		updatedAt: '2023-02-02T06:19:53.898Z'
	},
	repositories: [
		{
			createdAt: '2022-09-13T06:19:08.896Z',
			fork: 0,
			issues: 0,
			languages: {
				JavaScript: 7.7,
				SCSS: 6.1,
				Vue: 86.11
			},
			name: 'kinetik',
			owner: 'scriptex',
			private: true,
			size: 323391324,
			stargazers: 0,
			updated_at: '2022-09-13T07:26:00.685Z'
		}
	],
	updated: 1675318793898
};

const dataEmpty: GitlabInsights = {
	calendar: null,
	error: false,
	general: null,
	repositories: null,
	updated: 1675318793898
};

const calendarData = resumeOwner.privateGitlabCalendar;

snapshotTest(
	() => <GitlabStats calendarData={calendarData} data={dataFull} funding={funding} partners={partners} />,
	undefined,
	'GitlabStats'
);

snapshotTest(
	() => (
		<GitlabStats
			calendarData={calendarData}
			data={{ ...dataFull, updated: null }}
			funding={funding}
			partners={partners}
		/>
	),
	undefined,
	'GitlabStats'
);

snapshotTest(
	() => <GitlabStats calendarData={calendarData} data={dataEmpty} funding={funding} partners={partners} />,
	undefined,
	'GitlabStats'
);

it('Test the GitlabStats page with fake timers', async () => {
	jest.useFakeTimers();

	const GitlabStatsComponent = () => (
		<GitlabStats calendarData={calendarData} data={dataFull} funding={funding} partners={partners} />
	);

	const { asFragment } = await test(GitlabStatsComponent);

	act(() => {
		jest.runOnlyPendingTimers();
	});

	expect(asFragment()).toMatchSnapshot();
});
