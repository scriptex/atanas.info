import { statsItems } from '@data/projects';
import { snapshotTest } from '@test-config/helpers';
import { presentations } from '@data/presentations';
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
	'.c-section__actions .c-btn:first-child'
);

snapshotTest(() => (
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
));

snapshotTest(() => (
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
));

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
	'.c-section__actions .c-btn:first-child'
);

snapshotTest(() => <SectionNav name="title" data={presentations} active={0} onClick={jest.fn()} />, '.c-btn');

snapshotTest(() => <SectionGrid data={statsItems} />);

snapshotTest(() => <SectionGrid data={statsItems} linkType="internal" />);

snapshotTest(() => <SectionGrid data={statsItems} linkType="external" />);
