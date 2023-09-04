import type { Education, OwnerDetails, ResumeLink, ResumeMore, ResumeSkills } from '@scripts/cms';

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
	summary: 'Owner summary',
	privateGitlabCalendar: {
		test1: 1,
		test2: 2
	}
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

export const resumeMore: ResumeMore[] = [
	{
		index: 0,
		title: 'Resume more 1 Title',
		content: '<p>Resume more 1 content</p>'
	}
];
