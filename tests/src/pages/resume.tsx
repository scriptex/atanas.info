import { Resume } from '@pages/resume';
import { snapshotTest } from '@test-config/helpers';
import {
	experience,
	certificates,
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
				links,
				owner,
				skills,
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
