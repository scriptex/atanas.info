import { act } from '@testing-library/react';

import { GitlabStats } from '@pages/stats/gitlab';
import { test, snapshotTest } from '@test-config/helpers';
import type { GitlabInsights } from '@scripts/types';
import { funding, partners, resumeOwner } from '@test-config/mocks';

jest.mock('@lib/mongodb', () => ({
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } }))
}));

const dataFull: GitlabInsights = {
	error: false,
	general: {
		repos: 119,
		createdAt: '2018-01-03T11:47:34.435Z',
		updatedAt: '2023-02-02T06:19:53.898Z'
	},
	updated: 1675318793898,
	calendar: {
		'2022-02-03': 1
	},
	repositories: [
		{
			name: 'kinetik',
			private: true,
			fork: 0,
			createdAt: '2022-09-13T06:19:08.896Z',
			updated_at: '2022-09-13T07:26:00.685Z',
			size: 323391324,
			stargazers: 0,
			languages: {
				Vue: 86.11,
				JavaScript: 7.7,
				SCSS: 6.1
			},
			issues: 0,
			owner: 'scriptex'
		}
	]
};

const dataEmpty: GitlabInsights = {
	error: false,
	general: null,
	updated: 1675318793898,
	calendar: null,
	repositories: null
};

const calendarData = resumeOwner.privateGitlabCalendar;

snapshotTest(
	() => <GitlabStats data={dataFull} funding={funding} partners={partners} calendarData={calendarData} />,
	undefined,
	'GitlabStats'
);

snapshotTest(
	() => (
		<GitlabStats
			data={{ ...dataFull, updated: null }}
			funding={funding}
			partners={partners}
			calendarData={calendarData}
		/>
	),
	undefined,
	'GitlabStats'
);

snapshotTest(
	() => <GitlabStats data={dataEmpty} funding={funding} partners={partners} calendarData={calendarData} />,
	undefined,
	'GitlabStats'
);

it('Test the GitlabStats page with fake timers', async () => {
	jest.useFakeTimers();

	const GitlabStatsComponent = () => (
		<GitlabStats data={dataFull} funding={funding} partners={partners} calendarData={calendarData} />
	);

	const { asFragment } = await test(GitlabStatsComponent);

	act(() => {
		jest.runOnlyPendingTimers();
	});

	expect(asFragment()).toMatchSnapshot();
});
