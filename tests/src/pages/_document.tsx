import { Document } from '@pages/_document';
import { snapshotTest } from '@test-config/helpers';

jest.mock('next/document', () => ({
	Head: () => <div />,
	Html: () => <div />,
	Main: () => <main />,
	NextScript: () => <script />
}));

snapshotTest(Document);
