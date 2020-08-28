import * as React from 'react';

import { Button } from '..';
import { AppContext } from '../app';

export interface Props {
	id: string;
	actions?: React.ReactNode;
	children: any;
	className?: string;
	hasShell?: boolean;
	hasButton: boolean;
	shellClass?: string;
	style?: React.CSSProperties;
}

export const SectionElements: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const { setContactVisible } = React.useContext(AppContext);

	return (
		<>
			{props.children}

			{props.hasButton && (
				<div className="c-section__actions">
					<Button type="button" onClick={() => setContactVisible(true)}>
						Hire me
					</Button>

					{!!props.actions && (
						<>
							<br className="visible-xs-block" />

							{props.actions}
						</>
					)}
				</div>
			)}
		</>
	);
};

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
