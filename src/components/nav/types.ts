import type { MenuItem } from '@data/menu';

export type Props = {
	active?: number;
	inline?: boolean;
	onClick?: () => void;
	setActive?: (index: number) => void;
};

export type AnchorProps = Omit<MenuItem, 'children'> & Pick<Props, 'onClick'>;
