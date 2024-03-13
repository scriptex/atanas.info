import { PortfolioEmailTemplates } from '@pages/portfolio/email-templates';

import { snapshotTest } from '@test-config/helpers';
import { funding, partners } from '@test-config/mocks';

snapshotTest(
	() => <PortfolioEmailTemplates funding={funding} partners={partners} />,
	'.c-email-templates button:first-of-type',
	'PortfolioEmailTemplates'
);
