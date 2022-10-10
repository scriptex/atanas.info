import * as React from 'react';

export interface Props {
	children: React.ReactNode | string | Array<React.ReactNode | string>;
	isExternal: boolean;
}

export const getRandomClassName = (): string => {
	const items = ['parallelowow', 'bytemare', 'blotto'];

	return items[Math.floor(Math.random() * items.length)];
};

export const SectionGridItem: React.FC<Props> = ({ children, isExternal }: Props) =>
	isExternal ? <div className={`c-section__grid-item ${getRandomClassName()}`}>{children}</div> : <>{children}</>;

export default SectionGridItem;
