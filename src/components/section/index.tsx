import * as React from 'react';

import { Button } from '..';
import { AppContext } from '../app';

export interface Props {
	id: string;
	style?: React.CSSProperties;
	actions?: React.ReactNode;
	children: any;
	hasShell?: boolean;
	hasButton: boolean;
	className?: string;
	shellClass?: string;
	wrapperClassName?: string;
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
	<main className={`o-main ${props.wrapperClassName || ''}`}>
		<section
			id={props.id}
			style={props.style}
			className={`c-section c-section--${props.id}${props.className || ''}`}
		>
			{props.hasShell ? (
				<div className={`o-shell${props.shellClass ? ' ' + props.shellClass : ''}`}>
					<SectionElements {...props} />
				</div>
			) : (
				<SectionElements {...props} />
			)}
		</section>
	</main>
);

Section.defaultProps = {
	hasShell: true,
	hasButton: true
};

export default Section;
