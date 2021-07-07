import * as React from 'react';

import { AppContext } from '../app';
import { Icon, Button, ExternalLink } from '../../components';

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
	const [open, setOpen] = React.useState(false);
	const { setContactVisible } = React.useContext(AppContext);

	return (
		<>
			{props.children}

			{props.hasButton && (
				<div className="c-section__actions">
					<Button type="button" onClick={() => setOpen(!open)}>
						Hire me
					</Button>

					<ul className={`c-section__actions-list${open ? ' c-section__actions-list--open' : ''}`}>
						<li>
							<Button type="button" onClick={() => setOpen(!open)} className="c-section__actions-close">
								Close
							</Button>
						</li>

						<li>
							<Button
								type="button"
								onClick={() => {
									setOpen(false);
									setContactVisible(true);
								}}
							>
								<Icon name="svg-email" className="c-section__actions-icon" />
								Hire me directly
							</Button>
						</li>

						<li>
							<ExternalLink
								href="https://app.usebraintrust.com/talent/782/"
								className="c-btn"
								onClick={() => setOpen(false)}
							>
								<Icon name="svg-braintrust" className="c-section__actions-icon" />
								Hire me on Braintrust
							</ExternalLink>
						</li>

						<li>
							<ExternalLink
								href="https://www.toptal.com/resume/atanas-atanasov"
								className="c-btn"
								onClick={() => setOpen(false)}
							>
								<Icon name="svg-toptal" className="c-section__actions-icon" />
								Hire me on Toptal
							</ExternalLink>
						</li>
					</ul>

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
