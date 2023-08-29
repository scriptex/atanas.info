import { Resume } from '@pages/resume';
import { snapshotTest } from '@test-config/helpers';
import {
	strengths,
	experience,
	certificates,
	resumeMore as more,
	resumeLinks as links,
	resumeOwner as owner,
	resumeSkills as skills,
	resumeEducation as education
} from '@test-config/mocks';

window.print = jest.fn();

snapshotTest(
	() => (
		<Resume
			data={{
				more,
				links,
				owner,
				skills,
				strengths,
				education,
				experience,
				certificates
			}}
		/>
	),
	'.c-btn--print',
	'Resume'
);

(window.print as jest.Mock).mockClear();
