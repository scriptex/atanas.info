import * as React from 'react';
import { render } from '@testing-library/react';

import { buttonsTest } from '..';
import { Props, Section, SectionElements } from '.';

interface Component {
	name: string;
	component: React.FC<Readonly<Props>>;
}

interface Components {
	main: Component;
	elements: Component;
}

const components: Components = {
	main: {
		name: 'Section',
		component: Section
	},
	elements: {
		name: 'SectionElements',
		component: SectionElements
	}
};

const test = (title: string, Component: React.FC<Readonly<Props>>, props: Omit<Props, 'children'>): void => {
	const Children: React.FC = () => (
		<>
			<p>Test</p>
			<p>Test</p>
		</>
	);

	it(title, () => {
		const { asFragment } = render(
			<Component {...props}>
				<Children />
			</Component>
		);

		expect(asFragment()).toMatchSnapshot();
	});
};

const suite = (Component: React.FC<Readonly<Props>>, name: string): void => {
	describe(`${name} component`, () => {
		test(`Should render the ${name} component`, Component, {
			id: 'section',
			className: 'test',
			hasButton: true,
			hasShell: true
		});

		test(`Should render the ${name} component without a button`, Component, {
			id: 'section',
			hasButton: false,
			hasShell: true,
			shellClass: 'o-shell--flex'
		});

		test(`Should render the ${name} component without a shell`, Component, {
			id: 'section',
			className: 'test',
			hasButton: true,
			hasShell: false
		});

		test(`Should render the ${name} component without a button and a shell`, Component, {
			id: 'section',
			className: 'test',
			hasButton: false,
			hasShell: false
		});
	});
};

Object.values(components).forEach((value: Component) => suite(value.component, value.name));

describe('Section component state management', () => {
	it('Should handle state management', () => {
		const { asFragment, container } = render(
			<Section id="test" hasButton actions>
				Test
			</Section>
		);

		expect(asFragment()).toMatchSnapshot();

		buttonsTest(container, asFragment, '.c-btn');
	});
});
