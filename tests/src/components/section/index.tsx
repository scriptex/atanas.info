import { Section, SectionGrid, SectionNav } from '@components';

import { statsItems } from '@data/projects';

import { snapshotTest } from '@test-config/helpers';
import { videos } from '@test-config/mocks';

snapshotTest(
	() => (
		<Section
			actions={<div />}
			additionalElements={<div />}
			className="c-section-test"
			id="test"
			shellClass="c-shell-test"
			style={{ color: 'rebeccapurple' }}
			subtitle="Test subtitle"
			title="Test title"
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
			actions={<div />}
			additionalElements={<div />}
			className="c-section-test"
			hasButton={false}
			id="test"
			shellClass="c-shell-test"
			style={{ color: 'rebeccapurple' }}
			subtitle="Test subtitle"
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
			actions={<div />}
			additionalElements={<div />}
			className="c-section-test"
			hasButton={false}
			hasShell={false}
			id="test"
			shellClass="c-shell-test"
			style={{ color: 'rebeccapurple' }}
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
			actions={<div />}
			additionalElements={<div />}
			className="c-section-test"
			hasButton
			hasShell={false}
			id="test"
			shellClass="c-shell-test"
			style={{ color: 'rebeccapurple' }}
		>
			<h1>This is a test title</h1>
		</Section>
	),
	'.c-section__actions .c-btn:first-child',
	'Section'
);

snapshotTest(() => <SectionNav active={0} data={videos} name="title" onClick={jest.fn()} />, '.c-btn', 'Section');

snapshotTest(() => <SectionGrid data={statsItems} />, undefined, 'Section');

snapshotTest(() => <SectionGrid data={statsItems} linkType="internal" />, undefined, 'Section');

snapshotTest(() => <SectionGrid data={statsItems} linkType="external" />, undefined, 'Section');
