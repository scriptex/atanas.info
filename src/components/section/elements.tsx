import { FC, useContext, useState } from 'react';

import { AppContext } from '@data/context';
import { composeClassName } from '@scripts/shared';
import { Icon, Button, ExternalLink } from '@components';

import type { Props } from './types';

const HeaderWrapper: FC<Pick<Props, 'children' | 'hasShell'>> = ({ children, hasShell }) => {
	return hasShell ? <>{children}</> : <div className="o-shell">{children}</div>;
};

export const SectionElements: FC<Readonly<Props>> = ({
	title,
	actions,
	children,
	subtitle,
	hasShell = true,
	hasButton = true,
	additionalElements
}: Props) => {
	const [open, setOpen] = useState(false);
	const { setContactVisible } = useContext(AppContext);
	const onClose = () => setOpen(false);

	return (
		<>
			{!!title || !!subtitle ? (
				<header className="c-section__header">
					<HeaderWrapper hasShell={hasShell}>
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
