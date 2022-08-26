import * as React from 'react';

import { SectionNav } from '.';
import { snapshotTest } from '../test-helpers';

const SectionNavComponent: React.FC = () => (
	<SectionNav
		name="title"
		data={[
			{
				url: 'https://google.com',
				title: 'Title 1',
				description: 'Description 1'
			},
			{
				url: 'https://google.com',
				title: 'Title 2',
				description: 'Description 2'
			}
		]}
		active={0}
		onClick={jest.fn()}
	/>
);

snapshotTest(SectionNavComponent, '.c-btn');
