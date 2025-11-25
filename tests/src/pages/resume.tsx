import { Resume } from '@pages/resume';

import { snapshotTest } from '@test-config/helpers';
import {
	certificates,
	resumeEducation as education,
	experience,
	funding,
	resumeLinks as links,
	resumeMore as more,
	resumeOwner as owner,
	partners,
	resumeSkills as skills,
	strengths
} from '@test-config/mocks';

window.print = jest.fn();

snapshotTest(
	() => (
		<Resume
			data={{
				certificates,
				education,
				experience,
				links,
				more,
				owner,
				skills,
				strengths
			}}
			funding={funding}
			partners={partners}
		/>
	),
	'.c-btn--print',
	'Resume'
);

(window.print as jest.Mock).mockClear();
