import { Document } from '@pages/_document';
import { snapshotTest } from '@test-config/helpers';

jest.mock('next/document', () => ({
	Html: () => <div />,
	Head: () => <div />,
	Main: () => <main />,
	NextScript: () => <script />
}));

snapshotTest(Document);
