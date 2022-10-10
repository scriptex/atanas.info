import * as React from 'react';

import { AppContext } from '../app';
import { composeClassName } from '../../scripts/shared';
import { Icon, Button, ExternalLink } from '../../components';

export interface Props {
	id: string;
	title?: string;
	style?: React.CSSProperties;
	actions?: React.ReactNode;
	children: React.ReactNode | string | Array<React.ReactNode | string>;
	subtitle?: string;
	hasShell?: boolean;
	hasButton: boolean;
	className?: string;
	shellClass?: string;
	wrapperClassName?: string;
	additionalElements?: React.ReactNode;
}

export const SectionElements: React.FC<Readonly<Props>> = ({
	title,
	actions,
	children,
	subtitle,
	hasShell,
	hasButton,
	additionalElements
}: Props) => {
	const [open, setOpen] = React.useState(false);
	const { setContactVisible } = React.useContext(AppContext);
	const onClose = () => setOpen(false);

	const HeaderWrapper: React.FC<Pick<Props, 'children'>> = ({ children }) => {
		return hasShell ? <>{children}</> : <div className="o-shell">{children}</div>;
	};

	return (
		<>
			{!!title || !!subtitle ? (
				<header className="c-section__header">
					<HeaderWrapper>
						{additionalElements}

						{!!title && <h2>{title}</h2>}

						{!!subtitle && <h3>{subtitle}</h3>}
					</HeaderWrapper>
				</header>
			) : null}

			{children}

			{hasButton && (
				<div className="c-section__actions">
					<Button type="button" onClick={() => setOpen(!open)}>
						Get in touch
					</Button>

					<ul className={composeClassName('c-section__actions-list', open ? ['open'] : [])}>
						<li>
							<Button type="button" onClick={onClose} className="c-section__actions-close">
								Close
							</Button>
						</li>

						<li>
							<Button
								type="button"
								onClick={() => {
									onClose();
									setContactVisible(true);
								}}
							>
								<Icon name="svg-email" className="c-section__actions-icon" />
								<span>Contact me</span>
								<strong>directly</strong>
							</Button>
						</li>

						<li>
							<ExternalLink
								href="https://app.usebraintrust.com/talent/782/"
								className="c-btn"
								onClick={onClose}
							>
								<Icon name="svg-braintrust" className="c-section__actions-icon" />
								<span>Hire me on</span>
								<strong>Braintrust</strong>
							</ExternalLink>
						</li>

						<li>
							<ExternalLink
								href="https://www.toptal.com/resume/atanas-atanasov"
								className="c-btn"
								onClick={onClose}
							>
								<Icon name="svg-toptal" className="c-section__actions-icon" />
								<span>Hire me on</span>
								<strong>Toptal</strong>
							</ExternalLink>
						</li>
					</ul>

					{!!actions && (
						<>
							<br className="visible-xs-block" />

							{actions}
						</>
					)}
				</div>
			)}
		</>
	);
};

export const Section: React.FC<Readonly<Props>> = (props: Props) => {
	const { id, style, hasShell, className, shellClass, wrapperClassName } = props;

	return (
		<main className={composeClassName('o-main', [], [wrapperClassName])}>
			<section id={id} style={style} className={composeClassName('c-section', [id], [className])}>
				{hasShell ? (
					<div className={composeClassName('o-shell', [], [shellClass])}>
						<SectionElements {...props} />
					</div>
				) : (
					<SectionElements {...props} />
				)}
			</section>
		</main>
	);
};

Section.defaultProps = {
	hasShell: true,
	hasButton: true
};

export default Section;
