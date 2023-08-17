import type { FC } from 'react';

import type { Props } from './types';

export const NavInner: FC<Readonly<Props>> = ({ hasShell, children }: Props) => {
	return hasShell ? <div className="o-shell">{children}</div> : <>{children}</>;
};
