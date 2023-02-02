export type InteractiveResumeItem = {
	title: string;
	element: JSX.Element;
};

export const interactiveResumeItems: InteractiveResumeItem[] = [
	{
		title: 'Activity',
		element: <codersrank-activity labels legend tooltip branding="false" username="scriptex" />
	},
	{
		title: 'Education',
		element: (
			<codersrank-education
				grid
				branding="false"
				username="scriptex"
				education-section-title="Schools"
				certificates-section-title="Certificates"
			/>
		)
	},
	{
		title: 'Portfolio',
		element: <codersrank-portfolio grid branding="false" username="scriptex" />
	},
	{
		title: 'Skills',
		element: <codersrank-skills-chart labels legend tooltip branding="false" username="scriptex" />
	},
	{
		title: 'Summary',
		element: <codersrank-summary username="scriptex" />
	},
	{
		title: 'Work',
		element: <codersrank-work-experience grid logos branding="false" username="scriptex" />
	},
	{
		title: 'Work Experience Timeline',
		element: <codersrank-timeline type="workexperience" branding="false" username="scriptex" />
	},
	{
		title: 'Portfolio Timeline',
		element: <codersrank-timeline type="portfolio" branding="false" username="scriptex" />
	},
	{
		title: 'Technologies Timeline',
		element: <codersrank-timeline type="technologies" branding="false" username="scriptex" />
	}
];
