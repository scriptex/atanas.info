import { act } from 'react-dom/test-utils';
import type { FC } from 'react';
import { render, RenderResult, waitFor } from '@testing-library/react';

import * as shared from '@scripts/shared';

type ComponentType = FC<Readonly<React.ComponentProps<any>>>;

export const test = async (Component: ComponentType): Promise<RenderResult> => {
	let result!: RenderResult;

	await act(async () => {
		result = await waitFor(() => render(<Component />));
	});

	return result;
};

export const snapshotTest = (Component: ComponentType, buttonSelector?: string): void => {
	const { name } = Component;

	jest.spyOn(shared, 'formatDate');

	(shared.formatDate as jest.Mock).mockImplementation(() => 'Mock date');

	afterAll(() => {
		jest.clearAllMocks();
	});

	describe(`${name} component`, () => {
		it(`Should render the ${name} component`, async () => {
			const { asFragment, container } = await test(Component);

			expect(asFragment()).toMatchSnapshot();

			if (buttonSelector) {
				await act(async () => {
					await container.querySelectorAll<HTMLElement>(buttonSelector).forEach(button => {
						if (!button.hasAttribute('download')) {
							button.click();

							expect(asFragment()).toMatchSnapshot();
						}
					});
				});
			}
		});

		it(`Should unmount the ${name} component`, async () => {
			const { unmount, asFragment } = await test(Component);

			unmount();

			expect(asFragment()).toMatchSnapshot();
		});
	});
};

export const mockAudioContext = (): jest.Mock => {
	const mockConnect = jest.fn();

	const mockgetByteFrequencyData = jest.fn();

	const mockcreateMediaElementSource = jest.fn(() => ({
		connect: mockConnect
	}));

	const mockcreateAnalyser = jest.fn(() => ({
		connect: mockConnect,
		frequencyBinCount: [0, 1, 2],
		getByteFrequencyData: mockgetByteFrequencyData
	}));

	const mockcreateOscillator = jest.fn(() => ({
		channelCount: 2
	}));

	const mockChannelSplitterConnect = jest.fn(n => n);

	const mockcreateChannelSplitter = jest.fn(() => ({
		connect: mockChannelSplitterConnect
	}));

	const mockedAudioContext = jest.fn(() => ({
		createAnalyser: mockcreateAnalyser,
		createOscillator: mockcreateOscillator,
		createChannelSplitter: mockcreateChannelSplitter,
		createMediaElementSource: mockcreateMediaElementSource
	}));

	return mockedAudioContext;
};

export const mockFetch = (value: Record<string, string | boolean>): void => {
	global.fetch = jest.fn().mockImplementation(() =>
		Promise.resolve({
			json: () => Promise.resolve(value)
		})
	);
};
