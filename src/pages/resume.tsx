import Head from 'next/head';
import type { FC } from 'react';

import resume from '@data/lotties/resume.json';
import {
	Lines,
	Button,
	Layout,
	Section,
	Animation,
	ResumeTitle,
	ResumeSkills,
	ResumeSummary,
	ResumeEducation,
	ResumeStrengths,
	ResumeExperience
} from '@components';

export const Resume: FC = () => (
	<Layout>
		<Head>
			<title>Resume | Atanas Atanasov | Senior Javascript/Typescript Engineer</title>
		</Head>

		<Section
			id="resume"
			title="Resume"
			actions={
				<>
					<Button onClick={() => window.print()}>
						<i className="icon-print"></i> Print
					</Button>

					<Button type="anchor" href="/resume.pdf" download>
						<i className="icon-download"></i> Download
					</Button>
				</>
			}
			hasButton
			additionalElements={<Animation data={resume} width={150} height={150} className="c-section__animation" />}
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
	</Layout>
);

export default Resume;
