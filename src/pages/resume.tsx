import type { FC } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import resume from '@data/lotties/resume.json';
import type { ResumePageData } from '@scripts/types';
import {
	getFundingFromCMS,
	getPartnersFromCMS,
	getEducationFromCMS,
	getStrengthsFromCMS,
	getExperienceFromCMS,
	getResumeMoreFromCMS,
	getResumeLinksFromCMS,
	getCertificatesFromCMS,
	getOwnerDetailsFromCMS,
	getResumeSkillsFromCMS
} from '@scripts/cms';
import {
	Lines,
	Title,
	Button,
	Layout,
	Section,
	Animation,
	ResumeMore,
	ResumeTitle,
	ResumeSkills,
	ResumeSummary,
	ResumeEducation,
	ResumeStrengths,
	ResumeExperience
} from '@components';

export const Resume: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Resume" />

		<Section
			id="resume"
			title="Resume"
			actions={
				<>
					<Button type="button" onClick={() => window.print()} className="c-btn--print">
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
				{!!data.links?.length && (
					<ResumeTitle
						alt={data.owner.alt}
						data={data.links}
						name={data.owner.name}
						title={data.owner.title}
						image={data.owner.image}
					/>
				)}

				<div className="c-resume__content">
					<ResumeSummary content={data.owner.summary} />

					<ResumeEducation education={data.education} certificates={data.certificates} />

					<ResumeExperience data={data.experience} />
				</div>

				<div className="c-resume__aside">
					<ResumeSkills data={data.skills} />

					<ResumeStrengths data={data.strengths} />

					<ResumeMore data={data.more} />
				</div>
			</div>
		</Section>
	</Layout>
);

export const getStaticProps: GetStaticProps<ResumePageData> = async () => ({
	props: {
		data: {
			more: await getResumeMoreFromCMS(),
			links: await getResumeLinksFromCMS(),
			owner: await getOwnerDetailsFromCMS(),
			skills: await getResumeSkillsFromCMS(),
			education: await getEducationFromCMS(),
			strengths: await getStrengthsFromCMS(),
			experience: await getExperienceFromCMS(),
			certificates: await getCertificatesFromCMS()
		},
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Resume;
