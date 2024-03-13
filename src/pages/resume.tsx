import type { FC } from 'react';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import {
	Animation,
	Button,
	Layout,
	Lines,
	ResumeEducation,
	ResumeExperience,
	ResumeMore,
	ResumeSkills,
	ResumeStrengths,
	ResumeSummary,
	ResumeTitle,
	Section,
	Title
} from '@components';
import {
	getCertificatesFromCMS,
	getEducationFromCMS,
	getExperienceFromCMS,
	getFundingFromCMS,
	getOwnerDetailsFromCMS,
	getPartnersFromCMS,
	getResumeLinksFromCMS,
	getResumeMoreFromCMS,
	getResumeSkillsFromCMS,
	getStrengthsFromCMS
} from '@scripts/cms';
import type { ResumePageData } from '@scripts/types';

import resume from '@data/lotties/resume.json';

export const Resume: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data, funding, partners }) => (
	<Layout funding={funding} partners={partners}>
		<Title text="Resume" />

		<Section
			actions={
				<>
					<Button className="c-btn--print" onClick={() => window.print()} type="button">
						<i className="icon-print"></i> Print
					</Button>

					<Button download href="/resume.pdf" type="anchor">
						<i className="icon-download"></i> Download
					</Button>
				</>
			}
			additionalElements={<Animation className="c-section__animation" data={resume} height={150} width={150} />}
			hasButton
			id="resume"
			title="Resume"
		>
			<Lines />

			<div className="c-resume">
				{!!data.links?.length && (
					<ResumeTitle
						alt={data.owner.alt}
						data={data.links}
						image={data.owner.image}
						name={data.owner.name}
						title={data.owner.title}
					/>
				)}

				<div className="c-resume__content">
					<ResumeSummary content={data.owner.summary} />

					<ResumeEducation certificates={data.certificates} education={data.education} />

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
			certificates: await getCertificatesFromCMS(),
			education: await getEducationFromCMS(),
			experience: await getExperienceFromCMS(),
			links: await getResumeLinksFromCMS(),
			more: await getResumeMoreFromCMS(),
			owner: await getOwnerDetailsFromCMS(),
			skills: await getResumeSkillsFromCMS(),
			strengths: await getStrengthsFromCMS()
		},
		funding: await getFundingFromCMS(),
		partners: await getPartnersFromCMS()
	}
});

export default Resume;
