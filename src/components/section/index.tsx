import * as React from 'react';

import { ExternalLink } from '..';

export interface Props {
	id: string;
	children: any;
	className?: string;
	hasShell?: boolean;
	hasButton: boolean;
	shellClass?: string;
	style?: React.CSSProperties;
}

export const SectionElements: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => (
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

export const Section: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => (
	<section id={props.id} className={`c-section c-section--${props.id}${props.className || ''}`} style={props.style}>
		{props.hasShell ? (
			<div className={`o-shell${props.shellClass ? ' ' + props.shellClass : ''}`}>
				<SectionElements {...props} />
			</div>
		) : (
			<SectionElements {...props} />
		)}
	</section>
);

Section.defaultProps = {
	hasShell: true,
	hasButton: true
};

export default Section;
