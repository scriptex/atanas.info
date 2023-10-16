import { partners } from '@test-config/mocks';
import { snapshotTest } from '@test-config/helpers';
import { PortfolioEmailTemplates } from '@pages/portfolio/email-templates';

snapshotTest(
	() => <PortfolioEmailTemplates partners={partners} />,
	'.c-email-templates button:first-of-type',
	'PortfolioEmailTemplates'
);
