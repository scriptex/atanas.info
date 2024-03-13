import type { Education, OwnerDetails, ResumeLink, ResumeMore, ResumeSkills } from '@scripts/cms';

export const resumeLinks: ResumeLink[] = [
	{
		icon: 'mail',
		index: 0,
		text: 'someone@example.com'
	},
	{
		icon: 'link',
		index: 1,
		text: 'example.com'
	},
	{
		icon: 'link',
		index: 2,
		text: 'linkedin.com/in/$USER'
	},
	{
		icon: 'link',
		index: 3,
		text: 'github.com/$USER'
	},
	{
		icon: 'location',
		index: 4,
		text: 'Earth'
	}
];

export const resumeOwner: OwnerDetails = {
	alt: 'Owner alt',
	image: 'https://example.com/image.png',
	index: 0,
	name: 'Owner name',
	privateGitlabCalendar: {
		test1: 1,
		test2: 2
	},
	summary: 'Owner summary',
	title: 'Owner title'
};

export const resumeEducation: Education[] = [
	{
		degree: 'Education degree',
		index: 0,
		period: 'Education period',
		school: 'Education school'
	}
];

export const resumeSkills: ResumeSkills[] = [
	{
		content: ['Skill 1', 'Skill 2', 'Skill 3'],
		index: 0,
		title: 'Skills group 1'
	}
];

export const resumeMore: ResumeMore[] = [
	{
		content: '<p>Resume more 1 content</p>',
		index: 0,
		title: 'Resume more 1 Title'
	}
];
