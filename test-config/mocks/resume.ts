import type { Education, OwnerDetails, ResumeLink, ResumeSkills } from '@scripts/cms';

export const resumeLinks: ResumeLink[] = [
	{
		icon: 'mail',
		text: 'someone@example.com',
		index: 0
	},
	{
		icon: 'link',
		text: 'example.com',
		index: 1
	},
	{
		icon: 'link',
		text: 'linkedin.com/in/$USER',
		index: 2
	},
	{
		icon: 'link',
		text: 'github.com/$USER',
		index: 3
	},
	{
		icon: 'location',
		text: 'Earth',
		index: 4
	}
];

export const resumeOwner: OwnerDetails = {
	alt: 'Owner alt',
	name: 'Owner name',
	index: 0,
	title: 'Owner title',
	image: 'https://example.com/image.png',
	summary: 'Owner summary'
};

export const resumeEducation: Education[] = [
	{
		index: 0,
		degree: 'Education degree',
		period: 'Education period',
		school: 'Education school'
	}
];

export const resumeSkills: ResumeSkills[] = [
	{
		index: 0,
		title: 'Skills group 1',
		content: ['Skill 1', 'Skill 2', 'Skill 3']
	}
];
