import { act } from '@testing-library/react';

import { Status } from '@src/components/contact/utils';
import { Contact } from '@components';
import { AppContext } from '@pages/_app';
import { test, snapshotTest } from '@test-config/helpers';

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

const mockFetch = (value: Record<string, string | boolean>): void => {
	global.fetch = jest.fn().mockImplementation(() =>
		Promise.resolve({
			json: () => Promise.resolve(value)
		})
	);
};

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
