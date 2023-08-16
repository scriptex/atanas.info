import type { MenuItem } from '@data/menu';
import type { ReactChildren } from '@scripts/types';

export type Props = {
	onClick?: () => void;
	hasShell?: boolean;
	children?: ReactChildren;
	className?: string;
};

export type AnchorProps = Omit<MenuItem, 'children'> & Pick<Props, 'onClick'>;
