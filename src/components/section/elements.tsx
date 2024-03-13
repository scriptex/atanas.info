import { FC, useContext, useState } from 'react';

import { Button, ExternalLink, Icon } from '@components';
import { AppContext } from '@data/context';
import { composeClassName } from '@scripts/shared';

import type { Props } from './types';

const HeaderWrapper: FC<Pick<Props, 'children' | 'hasShell'>> = ({ children, hasShell }) => {
	return hasShell ? <>{children}</> : <div className="o-shell">{children}</div>;
};

export const SectionElements: FC<Readonly<Props>> = ({
	actions,
	additionalElements,
	children,
	hasButton = true,
	hasShell = true,
	subtitle,
	title
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
					<Button onClick={() => setOpen(!open)} type="button">
						Get in touch
					</Button>

					<ul className={composeClassName('c-section__actions-list', open ? ['open'] : [])}>
						<li>
							<Button className="c-section__actions-close" onClick={onClose} type="button">
								Close
							</Button>
						</li>

						<li>
							<Button
								onClick={() => {
									onClose();
									setContactVisible(true);
								}}
								type="button"
							>
								<Icon className="c-section__actions-icon" name="svg-email" />
								<span>Contact me</span>
								<strong>directly</strong>
							</Button>
						</li>

						<li>
							<ExternalLink
								className="c-btn"
								href="https://app.usebraintrust.com/talent/782/"
								onClick={onClose}
							>
								<Icon className="c-section__actions-icon" name="svg-braintrust" />
								<span>Hire me on</span>
								<strong>Braintrust</strong>
							</ExternalLink>
						</li>

						<li>
							<ExternalLink
								className="c-btn"
								href="https://www.toptal.com/resume/atanas-atanasov"
								onClick={onClose}
							>
								<Icon className="c-section__actions-icon" name="svg-toptal" />
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
