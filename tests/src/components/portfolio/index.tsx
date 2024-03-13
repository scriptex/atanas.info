import { PortfolioSliders } from '@components';
import { automotiveProjects } from '@data/projects';
import { snapshotTest } from '@test-config/helpers';

snapshotTest(
	() => (
		<PortfolioSliders
			className="test"
			data={automotiveProjects.map((item, index) => (index === 0 ? { ...item, adjustable: true } : item))}
			folder="automotive-apps"
			slidesToShow={2}
		/>
	),
	undefined,
	'PortfolioSliders'
);
