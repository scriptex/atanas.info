import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, render } from 'enzyme';

import { Funding, FundingCrypto } from '.';

beforeEach(() => {
	window.prompt = jest.fn();
});

describe('Funding component', () => {
	it('Should render the Funding component', () => {
		act(() => {
			const wrapper = render(<Funding />);

			expect(wrapper).toMatchSnapshot();
		});
	});

	it('Should properly handle state changes', () => {
		act(() => {
			const wrapper = mount(<Funding />);

			wrapper.find('.c-btn').simulate('click');
		});

		act(() => {
			const wrapper = mount(<Funding />);

			wrapper.find('.c-funding__backdrop').simulate('click');
		});

		act(() => {
			const wrapper = mount(<Funding />);

			wrapper.find('.c-funding__trigger').simulate('click');
		});
	});
});

describe('FundingCrypto component', () => {
	it('Should render the Funding component', () => {
		act(() => {
			const wrapper = mount(<FundingCrypto name="test" title="Test title" wallet="random-wallet-string" />);

			wrapper.simulate('click');
		});
	});
});
