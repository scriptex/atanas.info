import { Nav } from '@components';
import { snapshotTest } from '@test-config/helpers';

jest.mock('@data/menu', () => ({
	...jest.requireActual('@data/menu'),
	menuItems: [
		{
			href: '/',
			index: 0,
			title: 'Home',
			content: 'Home'
		},
		{
			rel: 'noopener noreferrer',
			href: 'mailto:someone@example.com',
			index: 1,
			title: 'Send mail',
			content: 'Send mail'
		}
	]
}));

snapshotTest(Nav);
