import { Nav } from '@components';
import { snapshotTest } from '@test-config/helpers';

jest.mock('@data/menu', () => ({
	...jest.requireActual('@data/menu'),
	menuItems: [
		{
			content: 'Home',
			href: '/',
			index: 0,
			title: 'Home'
		},
		{
			content: 'Send mail',
			href: 'mailto:someone@example.com',
			index: 1,
			rel: 'noopener noreferrer',
			title: 'Send mail'
		}
	]
}));

snapshotTest(Nav);
