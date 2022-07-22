import * as React from 'react';

import {
	Lines,
	Button,
	Section,
	ResumeTitle,
	ResumeSkills,
	ResumeSummary,
	ResumeEducation,
	ResumeStrengths,
	ResumeExperience
} from '..';

export const Resume: React.FC = () => (
	<Section
		id="resume"
		title="Resume"
		actions={
			<>
				<Button onClick={() => window.print()} className="c-btn--print">
					<i className="icon-print"></i> Print
				</Button>

				<Button type="link" href="/resume.pdf" download>
					<i className="icon-download"></i> Download
				</Button>
			</>
		}
		hasButton
	>
		<Lines />

		<div className="c-resume">
			<ResumeTitle />

			<div className="c-resume__content">
				<ResumeSummary />

				<ResumeEducation />

				<ResumeExperience />
			</div>

			<div className="c-resume__aside">
				<ResumeSkills />

				<ResumeStrengths />
			</div>
		</div>
	</Section>
);

export default Resume;
