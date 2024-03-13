import type { CSSProperties, ReactNode } from 'react';

import type { ReactChildren } from '@scripts/types';

export type Props = {
	actions?: ReactNode;
	additionalElements?: ReactNode;
	children: ReactChildren;
	className?: string;
	hasButton?: boolean;
	hasShell?: boolean;
	id: string;
	shellClass?: string;
	style?: CSSProperties;
	subtitle?: string;
	title?: string;
};
