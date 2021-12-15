import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, render } from 'enzyme';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

import { Contact } from '.';

enableFetchMocks();

describe('Contact component', () => {
	it('Should render the Contact component', () => {
		act(() => {
			const wrapper = render(<Contact />);

			expect(wrapper).toMatchSnapshot();
		});
	});

	it('Should submit the form', async () => {
		const container = document.createElement('div');

		await act(async () => {
			const wrapper = mount(<Contact />, { attachTo: container });

			fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

			await wrapper.find('form').simulate('submit');

			await wrapper.find('.c-contact__close').simulate('click');

			fetchMock.mockResponseOnce(JSON.stringify({ error: true }));

			await wrapper.find('form').simulate('submit');

			fetchMock.mockReject(new Error('An error occured'));

			await wrapper.find('form').simulate('submit');
		});
	});
});
