import type { FC } from 'react';

type Props = {
	content: string;
};

export const ResumeSummary: FC<Readonly<Props>> = ({ content }: Props) => (
	<div className="c-resume__block">
		<h2>Summary</h2>

		<div dangerouslySetInnerHTML={{ __html: content }} />
	</div>
);

export default ResumeSummary;
