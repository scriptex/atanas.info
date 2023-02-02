import { run } from '@npm';

jest.mock('npmtotal', () => ({
	__esModule: true,
	default: jest.fn(() =>
		Promise.resolve({
			stats: [
				['test', 100],
				['lest', 100],
				['zest', 100]
			],
			sum: 1873032
		})
	)
}));

jest.mock('package-info', () => ({
	__esModule: true,
	default: jest.fn(() =>
		Promise.resolve({
			name: 'test',
			version: '1.0.0',
			description: 'Test package',
			license: 'MIT',
			homepage: 'https://github.com/test/test',
			author: 'test'
		})
	)
}));

jest.mock('@lib/mongodb', () => ({
	__esModule: true,
	getData: jest.fn(() => Promise.resolve({ props: { data: [] } })),
	default: Promise.resolve({
		db: () => ({
			collection: () => ({
				findOne: jest.fn(() => Promise.resolve({ name: 'Mocked result' })),
				updateOne: jest.fn(() => Promise.resolve({ success: true }))
			})
		})
	})
}));

it('Should run the NPM stats from the command line', async () => {
	const result = await run();

	expect(result.sum).toBeDefined();
	expect(typeof result.sum).toEqual('number');

	expect(result.test).toBeDefined();

	expect(result.test.name).toBeDefined();
	expect(typeof result.test.name).toEqual('string');

	expect(result.test.version).toBeDefined();
	expect(typeof result.test.version).toEqual('string');

	expect(result.test.description).toBeDefined();
	expect(typeof result.test.description).toEqual('string');

	expect(result.test.license).toBeDefined();
	expect(typeof result.test.license).toEqual('string');

	expect(result.test.homepage).toBeDefined();
	expect(typeof result.test.homepage).toEqual('string');

	expect(result.test.author).toBeDefined();
	expect(typeof result.test.author).toEqual('string');

	expect(result.test.downloads).toBeDefined();
	expect(typeof result.test.downloads).toEqual('number');
});
