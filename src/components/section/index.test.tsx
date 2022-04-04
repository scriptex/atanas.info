import * as React from 'react';
import { mount, shallow } from 'enzyme';

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
		const wrapper = shallow(
			<Component {...props}>
				<Children />
			</Component>
		);

		expect(wrapper).toMatchSnapshot();
	});
};

// codebeat:disable[ABC,LOC,BLOCK_NESTING]
const suite = (Component: React.FC<Readonly<Props>>, name: string): void => {
	describe(`${name} component`, () => {
		test(`Should render the ${name} component`, Component, {
			id: 'section',
			className: ' test',
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
			className: ' test',
			hasButton: true,
			hasShell: false
		});

		test(`Should render the ${name} component without a button and a shell`, Component, {
			id: 'section',
			className: ' test',
			hasButton: false,
			hasShell: false
		});
	});
};
// codebeat:enable[ABC,LOC,BLOCK_NESTING]

Object.values(components).forEach((value: Component) => suite(value.component, value.name));

describe('Section component state management', () => {
	it('Should handle state management', () => {
		const wrapper = mount(
			<Section id="test" hasButton={true} actions>
				Test
			</Section>
		);

		wrapper.find('.c-btn').forEach(button => {
			button.simulate('click');
		});
	});
});
