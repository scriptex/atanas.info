import { act } from 'react';

import { Contact } from '@components';
import { AppContext } from '@data/context';
import { Status } from '@scripts/types';
import { mockFetch, snapshotTest, test } from '@test-config/helpers';

const fetch = global.fetch;
const context = { contactVisible: true, setContactVisible: jest.fn() };
const mockSubmit = jest.fn();

jest.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(mockSubmit);

afterAll(() => {
	global.fetch = fetch;
	jest.clearAllMocks();
});

snapshotTest(Contact, '.c-contact__close');
snapshotTest(() => (
	<AppContext.Provider value={context}>
		<Contact />
	</AppContext.Provider>
));
snapshotTest(() => <Contact initialStatus={Status.ERROR} />);
snapshotTest(() => <Contact initialStatus={Status.SUCCESS} />);

it('Tests Contact submission', async () => {
	const { asFragment, container } = await test(Contact);

	expect(asFragment()).toMatchSnapshot();

	const form = container.querySelector('form');

	if (!form) {
		return;
	}

	mockFetch({ error: 'Something went wrong!' });

	await act(async () => form.submit());

	expect(mockSubmit).toHaveBeenCalled();

	expect(asFragment()).toMatchSnapshot();

	mockFetch({ success: true });

	await act(async () => form.submit());

	expect(mockSubmit).toHaveBeenCalled();

	expect(asFragment()).toMatchSnapshot();
});
