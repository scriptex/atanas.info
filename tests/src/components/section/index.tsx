import { videos } from '@test-config/mocks';
import { statsItems } from '@data/projects';
import { snapshotTest } from '@test-config/helpers';
import { Section, SectionNav, SectionGrid } from '@components';

snapshotTest(
	() => (
		<Section
			id="test"
			title="Test title"
			style={{ color: 'rebeccapurple' }}
			actions={<div />}
			subtitle="Test subtitle"
			className="c-section-test"
			shellClass="c-shell-test"
			additionalElements={<div />}
		>
			<h1>This is a test title</h1>
		</Section>
	),
	'.c-section__actions .c-btn:first-child',
	'Section'
);

snapshotTest(
	() => (
		<Section
			id="test"
			style={{ color: 'rebeccapurple' }}
			actions={<div />}
			subtitle="Test subtitle"
			hasButton={false}
			className="c-section-test"
			shellClass="c-shell-test"
			additionalElements={<div />}
		>
			<h1>This is a test title</h1>
		</Section>
	),
	undefined,
	'Section'
);

snapshotTest(
	() => (
		<Section
			id="test"
			style={{ color: 'rebeccapurple' }}
			actions={<div />}
			hasShell={false}
			hasButton={false}
			className="c-section-test"
			shellClass="c-shell-test"
			additionalElements={<div />}
		>
			<h1>This is a test title</h1>
		</Section>
	),
	undefined,
	'Section'
);

snapshotTest(
	() => (
		<Section
			id="test"
			style={{ color: 'rebeccapurple' }}
			actions={<div />}
			hasShell={false}
			hasButton
			className="c-section-test"
			shellClass="c-shell-test"
			additionalElements={<div />}
		>
			<h1>This is a test title</h1>
		</Section>
	),
	'.c-section__actions .c-btn:first-child',
	'Section'
);

snapshotTest(() => <SectionNav name="title" data={videos} active={0} onClick={jest.fn()} />, '.c-btn', 'Section');

snapshotTest(() => <SectionGrid data={statsItems} />, undefined, 'Section');

snapshotTest(() => <SectionGrid data={statsItems} linkType="internal" />, undefined, 'Section');

snapshotTest(() => <SectionGrid data={statsItems} linkType="external" />, undefined, 'Section');
