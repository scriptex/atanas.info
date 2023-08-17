import { act } from '@testing-library/react';

import { Status } from '@scripts/types';
import { Contact } from '@components';
import { AppContext } from '@data/context';
import { test, mockFetch, snapshotTest } from '@test-config/helpers';

const fetch = global.fetch;
const context = { contactVisible: true, setContactVisible: jest.fn() };

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

	await act(async () => {
		await form.submit();
	});

	expect(asFragment()).toMatchSnapshot();

	mockFetch({ success: true });

	await act(async () => {
		await form.submit();
	});

	expect(asFragment()).toMatchSnapshot();
});
