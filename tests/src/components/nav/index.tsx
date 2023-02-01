import { Nav } from '@components';
import { snapshotTest } from '@test-config/helpers';

jest.mock('@data/menu', () => ({
	...jest.requireActual('@data/menu'),
	menuItems: [
		{
			href: '/',
			title: 'Home',
			content: 'Home'
		},
		{
			rel: 'noopener noreferrer',
			href: 'mailto:someone@example.com',
			title: 'Send mail',
			content: 'Send mail'
		}
	]
}));

snapshotTest(Nav);
