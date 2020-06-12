import * as React from 'react';

import { ExternalLink } from '..';

interface Props {
	id: string;
	children: (JSX.Element | JSX.Element[])[];
	className?: string;
	hasShell?: boolean;
	hasButton: boolean;
	shellClass?: string;
}

export const Section: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const SectionElements: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => (
		<>
			{props.children}

			{props.hasButton && (
				<div className="c-section__actions">
					<ExternalLink href="mailto:hi@atanas.info" className="c-btn">
						Hire me
					</ExternalLink>
				</div>
			)}
		</>
	);

	return (
		<section className={`c-section c-section--${props.id}${props.className || ''}`} id={props.id}>
			{props.hasShell ? (
				<div className={`o-shell${props.shellClass ? ' ' + props.shellClass : ''}`}>
					<SectionElements {...props} />
				</div>
			) : (
				<SectionElements {...props} />
			)}
		</section>
	);
};

Section.defaultProps = {
	hasShell: true,
	hasButton: true
};

export default Section;
