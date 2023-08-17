import type { ReactNode, CSSProperties } from 'react';

import type { ReactChildren } from '@scripts/types';

export type Props = {
	id: string;
	title?: string;
	style?: CSSProperties;
	actions?: ReactNode;
	children: ReactChildren;
	subtitle?: string;
	hasShell?: boolean;
	hasButton?: boolean;
	className?: string;
	shellClass?: string;
	additionalElements?: ReactNode;
};
