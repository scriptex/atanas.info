import { snapshotTest } from '@test-config/helpers';
import { PortfolioSliders } from '@components';
import { automotiveProjects } from '@data/projects';

snapshotTest(
	() => (
		<PortfolioSliders
			data={automotiveProjects.map((item, index) => (index === 0 ? { ...item, adjustable: true } : item))}
			folder="automotive-apps"
			slidesToShow={2}
			className="test"
		/>
	),
	undefined,
	'PortfolioSliders'
);
