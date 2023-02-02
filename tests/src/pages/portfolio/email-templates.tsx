import { snapshotTest } from '@test-config/helpers';
import { PortfolioEmailTemplates } from '@pages/portfolio/email-templates';

snapshotTest(PortfolioEmailTemplates, '.c-email-templates button:first-of-type');
